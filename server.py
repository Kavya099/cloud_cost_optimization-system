from flask import Flask, request, jsonify
import requests
import json

app = Flask(__name__)

def create_aws_services_and_pricing_prompt(data):
    prompt = "Based on the following requirements, suggest detailed AWS infrastructure specifications, including required services and their estimated prices:\n\n"
    for requirement in data.get("requirements", []):
        prompt += f"- {requirement}\n"

    additional_features = data.get("additionalFeatures", {}).get("details", "")
    if additional_features:
        prompt += f"\nAdditional Features: {additional_features}\n"

    prompt += "\nPlease provide suggestions on the specific AWS services that would be suitable for these requirements, along with an estimation of their costs."
    return prompt

def generate_content_with_api(prompt):
    api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
    api_key = "AIzaSyBivWqCDftV_7k7kUjyzI1fkkAriD1-KGE"  # Replace with your actual API key

    payload = {"contents": [{"parts": [{"text": prompt}]}]}
    headers = {"Content-Type": "application/json"}

    response = requests.post(f"{api_url}?key={api_key}", json=payload, headers=headers)

    if response.status_code == 200:
        return response.json()
    else:
        return {"error": f"Request failed with status code {response.status_code}"}
    
    

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "No file part"

    file = request.files['file']
    if file.filename == '':
        return "No selected file"

    if file:
        data = json.load(file)
        prompt = create_aws_services_and_pricing_prompt(data)
        response = generate_content_with_api(prompt)
        model_response = response['candidates'][0]['content']['parts'][0]['text']
        formatted_response = model_response.replace('*', '').strip()        
        return formatted_response


if __name__ == '__main__':
    app.run(debug=True)
