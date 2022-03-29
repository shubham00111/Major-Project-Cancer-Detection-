import numpy as np
import pandas as pd

import cv2
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tqdm import tqdm
import os
from sklearn.utils import shuffle
from sklearn.model_selection import train_test_split
from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.callbacks import EarlyStopping, ReduceLROnPlateau, TensorBoard, ModelCheckpoint
from sklearn.metrics import classification_report,confusion_matrix

import io


from warnings import filterwarnings
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))


colors_dark = ["#1F1F1F", "#313131", '#636363', '#AEAEAE', '#DADADA']
colors_red = ["#331313", "#582626", '#9E1717', '#D35151', '#E9B4B4']
colors_green = ['#01411C','#4B6F44','#4F7942','#74C365','#D0F0C0']


labels = ['glioma_tumor','no_tumor','meningioma_tumor','pituitary_tumor']
X_train = []
y_train = []
image_size = 150

os.chdir("C:/Users/Shubham/Downloads/dataset/")


from flask import redirect, url_for, render_template, request, flash

from flask import send_from_directory

from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = set(['jpg', 'jpeg', 'png'])
IMG_SIZE = 150 # size of images
UPLOAD_FOLDER = 'uploads'

from keras.models import load_model
model = load_model("C:/Users/Shubham/OneDrive/Desktop/flaskDemo/effnet3.h5")


from flask import Flask, render_template, request
app= Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def predict():
    imagefile = request.files['imagefile']
    image_path = "C:/Users/Shubham/OneDrive/Desktop/flaskDemo/images/"+imagefile.filename
    imagefile.save(image_path)
    
    
    img_array = cv2.imread(image_path, cv2.IMREAD_COLOR)  
    imagefile = cv2.resize(img_array,(150,150))
    imagefile = imagefile.reshape(1,150,150,3)
    p = model.predict(imagefile)
    p = np.argmax(p,axis=1)[0]

    if p==0:
        print('The model predicts that there is Glioma tumor')
        output="glioma"
    elif p==1:
        print('The model predicts that there is no tumor')
        output="no tumor"
    elif p==2:
        print('The model predicts that there is Meningioma tumor')
        output="m"
    else:
        print('The model predicts that there is pituitary tumor')
        output="p"

    if p!=1:
        print(f'The Model predicts that it is a {p}')


    return render_template('index.html', result=output)

if __name__ == "__main__":
    app.run(port=3000, debug=False)




