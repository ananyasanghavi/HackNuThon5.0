import requests
# tried simli api but not working now
url = "https://simli.com/api/startSession"

payload = {
    "apiKey": "g5hge0msuorj80divp7mg",
    "faceId": "04d062bc-00ce-4bb0-ace9-76880e3987ec",
    "intro": "Hello,Welcome to Interview. Can you introduce yourself?",
    "prompt": "Begin by designing an avatar-based interview experience for candidates applying to a position at your company. Start with fundamental questions that help establish rapport and gather essential information:'Tell me about yourself': .'What was your percentage in the last semester?': 'What project have you completed recently?': Why should we hire you?': 'Do you have any experience or completed internships relevant to this role?': Consider how the avatar-based interview format can enhance candidate engagement and provide valuable insights for the hiring process while maintaining a user-friendly experience.",
    "timeLimit": {"limit": 123},
    "userName": "Nidhi",
    "voiceId": "21m00Tcm4TlvDq8ikWAM"
}
headers = {"Content-Type": "application/json"}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)