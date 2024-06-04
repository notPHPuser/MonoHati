from fastapi import FastAPI, Depends, Request

app = FastAPI()


@app.get('')
def Artem():
    return "дурак"