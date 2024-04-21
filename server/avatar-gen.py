# import requests

import requests
import webbrowser
import os

url = "https://api.d-id.com/talks"
# url="https://api.d-id.com/clips/actors/amy/drivers"
payload = {
    "source_url": "https://create-images-results.d-id.com/DefaultPresenters/Emma_f/v1_image.jpeg",
    "script": {
        "type": "text",
        "input": "Do you have any Experience - Internship done for the same role?",
        "provider": {
            "type": "microsoft",
            "voice_id": "en-US-JennyNeural"
        }
    },
    "config": {
        "fluent": "true",
        "pad_audio": "0.0"
    },
     "webhook": "https://myhost.com/webhook",

    # "result_url": "https://localhost:3000/"
}
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "Basic Z3VwdGF0YW52aTA5MUBnbWFpbC5jb20:G2SAygRXz4Dsq5gQTZ8Sq"
}


response = requests.post(url, json=payload, headers=headers)
print(response.text)
talk_id = response.json()['id']
print("Video clip generated successfully. Talk ID:", talk_id)
url = url + "/tlk_OJYJPyxJI2o51XDt7x6B7"

result_response = requests.get(url=url, headers=headers)
print(result_response.text)
result_url = result_response.json()['result_url']


file_name = "output.mp4"
output_directory = "/Users/ananyasanghavi/Desktop/HackNuthon/server/clips"  # Specify your desired directory
file_path = os.path.join(output_directory, file_name)

with open(file_path, 'wb') as f:
    f.write(requests.get(result_url).content)

print("MP4 file downloaded successfully to:", file_path)

# Open the downloaded URL in the default web browser
webbrowser.open_new(result_url)



