from flask import Flask, request, jsonify
from flask_cors import CORS
from meta_ai_api import MetaAI
# import ollama

app = Flask(__name__)

ai = MetaAI()
user_prompt = input("Enter the user prompt: ") 

response1 = ai.prompt(message="What cultural nuances and customer behaviour patterns should I know. " + user_prompt + 
"Suggest me some places or regions in Mumbai such that I can maximize my profits. Also, provide the relevance score of each place."
)
response2 = ai.prompt(message="""
    Context: {}
    You will be given a long descriptive text. 
    Extract the information of places from the provided text.
    Also extract the relevance score provided. 
    Now give the list of places along with their scores. 
    Give the output in a list of dictionaries with keys as "place" and "score".
    """.format(response1)
    )
print(response1)
print(response2)

@app.route("/")
def hello():
    return f"<p>{response1} ------------------------ {response2}</p>"
# from groq import Groq
# GROQ_API_KEY = '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'
# client = Groq(api_key=GROQ_API_KEY) 
# llama_model = "llama3-groq-8b-8192-tool-use-preview"

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes




# user_prompt = """
# I'd be happy to help! Based on my previous answer, here are some regions in Mumbai that could be ideal for your cozy cake shop:

# 1. **Bandra**: Known for its upscale residential areas, Bandra is a popular spot for families and young professionals. The area has a high demand for specialty bakeries and cafes.
# 	* Target audience: Families with young children, young professionals, and couples celebrating special occasions.
# 	* Potential locations: Bandra West, Bandra East, and Pali Hill.
# 2. **Juhu**: This coastal suburb is a hub for families and has a high footfall of locals and tourists alike. The area is already home to several popular bakeries and cafes.
# 	* Target audience: Families with young children, tourists, and locals looking for a quick dessert fix.
# 	* Potential locations: Juhu Beach, Juhu Circle, and nearby residential areas.
# 3. **Andheri West**: This bustling suburb has a mix of residential and commercial areas, making it an ideal location for a cake shop. It's close to the airport and has a high demand for takeaways and deliveries.
# 	* Target audience: Families with young children, young professionals, and couples celebrating special occasions.
# 	* Potential locations: Andheri West, Versova, and nearby residential areas.
# 4. **Powai**: This upscale suburb is known for its residential complexes and has a high demand for specialty bakeries and cafes. It's also close to the airport and has a high footfall of professionals and families.
# 	* Target audience: Families with young children, young professionals, and couples celebrating special occasions.
# 	* Potential locations: Powai, Hiranandani Gardens, and nearby residential areas.
# 5. **Khar**: This charming suburb has a mix of residential and commercial areas, making it an ideal location for a cake shop. It's close to the beach and has a high demand for specialty bakeries and cafes.
# 	* Target audience: Families with young children, young professionals, and couples celebrating special occasions.
# 	* Potential locations: Khar West, Khar East, and nearby residential areas.

# When choosing a location, consider the following factors:

# * Footfall: Look for areas with high footfall, such as residential complexes, shopping centers, or areas with a high concentration of families.
# * Competition: Research the competition in the area and ensure that your shop can differentiate itself from existing bakeries and cafes.
# * Accessibility: Choose a location that is easily accessible by public transport or has ample parking for customers.
# * Demographics: Consider the demographics of the area, such as the age group, income level, and lifestyle of the residents.

# Additionally, consider partnering with local event planners, party organizers, and catering services to increase your visibility and reach a wider audience.

# Remember to research local regulations and obtain necessary permits before opening your shop. Good luck with your venture!"""


# user_prompt = input("Enter the user prompt: ")
# def llm(question):
#     formatted_prompt = """
#     What cultural nuances and customer behaviour patterns should I know. " + user_prompt{} + 
#     "Suggest me some places or regions in Mumbai such that I can maximize my profits.
#     Question: {}\n
#     You will be given a long descriptive text. 
#     Extract the information of places from the provided text.
#     Also extract the relevance score provided. 
#     Now give the list of places along with their scores. 
#     Give the output in a list of dictionaries with keys as "place" and "score".
#     """.format(user_prompt, question)


    # print("*" * 80)
    # res = ollama.chat(model="llama3.1", messages=[{"role": "user", "content": formatted_prompt}])
    # print(res["message"]["content"])


# ans1 = llm("")

# print(llm(user_prompt))
# print(query_groq(client, user_prompt))