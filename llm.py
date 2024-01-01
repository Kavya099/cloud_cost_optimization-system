import requests
import json

def create_aws_services_and_pricing_prompt(json_file_path):
    try:
        with open(json_file_path, 'r') as file:
            data = json.load(file)

        prompt = "Based on the following requirements, suggest detailed AWS infrastructure specifications, including required services and their estimated prices:\n\n"
        for requirement in data.get("requirements", []):
            # Assuming each requirement is a string
            prompt += f"- {requirement}\n"

        additional_features = data.get("additionalFeatures", {}).get("details", "")
        if additional_features:
            prompt += f"\nAdditional Features: {additional_features}\n"

        prompt += "\nPlease provide suggestions on the specific AWS services that would be suitable for these requirements, along with an estimation of their costs."
        return prompt
    except Exception as e:
        return f"Error: {e}"

def generate_content_with_api(json_file_path):
    prompt = create_aws_services_and_pricing_prompt(json_file_path)

    print("\n\nRequirement\n\n:",prompt)
    api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
    api_key = "AIzaSyBivWqCDftV_7k7kUjyzI1fkkAriD1-KGE"  # Replace with your actual API key

    payload = {"contents": [{"parts": [{"text": prompt}]}]}
    headers = {"Content-Type": "application/json"}

    response = requests.post(f"{api_url}?key={api_key}", json=payload, headers=headers)

    if response.status_code == 200:
        return response.json()
    else:
        return {"error": f"Request failed with status code {response.status_code}"}

# Example usage
json_file_path = input("Enter the path to your JSON file: ")
response = generate_content_with_api(json_file_path)
model_response = response['candidates'][0]['content']['parts'][0]['text']
print(model_response)
