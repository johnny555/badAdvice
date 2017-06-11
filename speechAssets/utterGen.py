actions = ['give me', 'tell me']
descriptions = ['advice', 'bad advice', 'a deep learning fact',
                'deep', 'learning',
                'a fact', 'an AI fact', 'AI advice']
intentName = "GetNewFactIntent"

results =[]
for a in actions:
    for d in descriptions:
        r =  intentName + ' ' + a + ' ' + d
        print(r)
