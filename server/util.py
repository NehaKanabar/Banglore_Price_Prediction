import json
import pickle
import numpy as np
import os

__location = None
__data_columns = None
__model = None

def get_estimated_price(location, sqft, bhk, bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except ValueError:
        loc_index = -1

    X = np.zeros(len(__data_columns))
    X[0] = sqft
    X[1] = bath
    X[2] = bhk
    if loc_index >= 0:
        X[loc_index] = 1

    # Use only the features that were used during training
    X = X[:244]
    return round(__model.predict([X])[0], 2)

def get_location_names():
    return __location

def load_saved_artifacts():
    print("Loading saved artifacts...start")
    global __data_columns
    global __location
    global __model

    artifacts_dir = os.path.join(os.path.dirname(__file__), 'artifacts')
    columns_path = os.path.join(artifacts_dir, 'columns.json')
    model_path = os.path.join(artifacts_dir, 'banglore_home_prices_model.pickle')

    print("Columns path:", columns_path)
    print("Model path:", model_path)

    try:
        with open(columns_path, 'r') as f:
            __data_columns = json.load(f)['data_columns']
            __location = __data_columns[3:]
            print("Data columns:", __data_columns)
            print("Location names:", __location)

        with open(model_path, 'rb') as f:
            __model = pickle.load(f)

        print("Loading saved artifacts...done")
    except Exception as e:
        print("Error loading artifacts:", str(e))

if __name__ == '__main__':
    load_saved_artifacts()


