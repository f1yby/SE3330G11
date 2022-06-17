import concurrent
import concurrent.futures
import time
from multiprocessing.dummy import Pool as ThreadPool
import itertools
import requests


def request_post(url, data):
    return requests.post(url, data=data)


def test(url, dataSet, testInfo):
    start_time = time.time()
    with concurrent.futures.ThreadPoolExecutor() as executor:  # optimally defined number of threads
        res = [executor.submit(request_post, url, data) for data in dataSet]
        concurrent.futures.wait(res)
    end_time = time.time()
    print(testInfo, ":", end_time - start_time)


url = "http://127.0.0.1:8080"

info = []
for i in range(0, 30):
    info.append({"name": "test" + str(i), 'password': 'test' + str(i), 'email': 'hello@world.com',
                 'iconUrl': 'www.PNG_ME.com'})
test(url + "/user/add", info, "Add User")

info.clear()
for i in range(0, 30):
    info.append({"name": "test" + str(i), 'password': 'test' + str(i)})
test(url + "/user/auth", info, "Auth User")

info.clear()
for i in range(0, 30):
    info.append(
        {"uid": 4, 'trid': i, 'date': 100, 'location': 'SJTU', 'centerLatitude': '100', 'centerLongitude': '200',
         'zoom': '100'})
test(url + "/footprint/add", info, "Add FootPrint")

info.clear()
for i in range(0, 30):
    info.append({"fid": 8, 'latitude': str(i), 'longitude': str(i), 'pictureUrl': 'url'})
test(url + "/footprint/picture/add", info, "Add FootPrint Picture")

info.clear()
for i in range(0, 30):
    info.append({"fid": 8, 'topic': str(i), 'content': str(i), 'tag': 'test'})
test(url + "/post/add", info, "Add Post")