const recipe = [
    {
        Id: 1,
        Name: "Negro cake",
        UserId: 1,
        CategoryId: 2,
        Img: "https://img.mako.co.il/2023/03/27/oga_pereg_choclet_autoOrient_i.jpg",
        Duration: 50,
        Difficulty: 1,
        Description: "easy cake to make",
        Ingrident: [
            { Name: "eggs", Count: 5, Type: "-" },
            { Name: "sugar", Count: 1.5, Type: "cups" },
            { Name: "flour", Count: 5, Type: "spoons" }
        ],
        Instructions: ["Mix all the ingredients together", "Bake on medium heat", "Cut immediately after baking"]
    },
    {   
        Id:2,
        Name:"French crape",
        UserId:1,
        CategoryId:1,
        Img:"https://chef-lavan.co.il/wp-content/uploads/old-storage/uploads/images/fd2fcab061b4326d9c0cb1f43b01717e.jpg",
        Duration:30,
        Difficulty:1,
        Description:"Looking for a sweet dessert that won't require much preparation time? It's time to make a classic. A recipe for a delicious and easy to prepare French crepe that you can fill with chocolate, maple, nuts and ice cream",
        Ingrident:[
            {"Name":"flour","Count":"2","Type":"cups"},
            {"Name":"milk","Count":"4","Type":"cups"},
            {"Name":"sugar","Count":"1/2","Type":"cup"},
            {"Name":"butter","Count":"50","Type":"gr'"}
        ],
        Instructions:["melt the butter over low heat","let it cool down","mix the rest of the ingredients together","and enjoy!"]
    }
   ,
    {
        Id:3,
        Name:"Cheesecake",
        UserId:1,
        CategoryId:1,
        Img:"https://happykitchen.co.il/wp-content/uploads/2020/05/עוגת-גבינה-פרורים-פרוסה.jpg",
        Duration:120,
        Difficulty:2,
        Description:"Home-baked cheesecake on butter cookies with a delicate coating of dark chocolate",
        Ingrident:[
            {"Name":"biscuits","Count":"200","Type":"gr"},
            {"Name":"Bama","Count":"125","Type":"gr"},
            {"Name":"white cheese","Count":"750","Type":"gr"},
            {"Name":"sour cream","Count":"1","Type":"goblet"},
            {"Name":"Cornflour","Count":"3","Type":"Spoons"},
            {"Name":"Sugar","Count":"1","Type":"cup"},
            {"Name":"eggs","Count":"3","Type":"-"},
            {"Name":"Sweet Cream-Rich","Count":"250","Type":"Mel'"},
            {"Name":" Milk jam/ Dark chocolate/Milk chocolate","Count":"100","Type":"Gr"}
        ],
        Instructions:[
            "grind the biscuits",
            "add butter",
            "carpet in a large round mold",
            "Put in the freezer.",
            "in a separate bowl",
            "Whipping the Rich",
            "Add the cheese, egg cream, sugar, cornflour",
            "mix slowly",
            "put on the base of the cake",
            "Put into the oven heated to 200",
            "Bake for 10 minutes at 200",
            "Reduce the degrees to 150",
            "Bake until the cake has swelled, got a vibrating and stable color",
            "Melt the milk jam or the chocolate together with a drop of milk jam",
            "When the cake has cooled, pour slowly over the cake,",
            "With an appetite!"
        ]
    },
    {
        Id:4,
        Name:"Watermelon Sorbet",
        UserId:3,
        CategoryId:3,
        Img:"https://www.10dakot.co.il/wp-content/uploads/2017/05/%E2%80%8F%E2%80%8FDSC_0005-%D7%A2%D7%95%D7%AA%D7%A7.jpg",
        Duration:10,
        Difficulty:1,
        Description:"A refreshing and delicious homemade watermelon sorbet dessert with only 3 ingredients!",
        Ingrident:[
            {"Name":"Half a medium-large watermelon cut into cubes","Count":"-","Type":"-"},
            {"Name":"orange juice","Count":"1/4","Type":"glass"},
            {"Name":"- optional depending on the sweetness of the watermelon - powdered sugar","Count":"1-2","Type":"tablespoons"}
        ],
        Instructions:[
            "Put the watermelon cubes in a sealed bag and freeze.",
            "Place the frozen watermelon cubes and orange juice in a food processor and grind until a soft sorbet texture (between hail and ice cream).",
            "Taste. If sweetness is lacking, add powdered sugar to taste and mix well."
        ]
    },
    {
        Id:5,
        Name: "Skewers in the oven with a homely taste",        UserId:3,
        UserId:3,
        CategoryId:2,
        Img:"https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2021/09/22192230/WhatsApp-Image-2021-09-19-at-15.33.02.jpeg",
        Duration:60,
        Difficulty:1,
        Description: "Isn't it true that sometimes the only thing you feel like is a good skewer? So get a recipe for sirloin and teriyaki skewers that will close this corner for you!",
        Ingrident:[
            {"Name":"meat","Count":"1/2","Type":"kilo"},
            {"Name":"cilantro","Count":"1","Type":"handful"},
            {"Name":"white pepper","Count":"1/2","Type":"teaspoon"},
            {"Name":"Meat Grill","Count":"1/2","Type":"Spoon"},
            {"Name":"salt","Count":"1/2","Type":"teaspoon"},
            {"Name":"Egg","Count":"1","Type":"-"},
            {"Name":"onion","Count":"1/2","Type":"-"},
            {"Name":"teriyaki sauce","Count":"1/3","Type":"cup"},
            {"Name":"Cumin","Count":"1/2","Type":"Spoon"}
        ],
        Instructions:[
            "Wash the meat well from above",
            "finely chop the cilantro and the onion",
            "Mix all the ingredients together",
            "to dribble into a big patty",
            "carpet in the middle of the skewer",
            "Place in a mold, cover with aluminum foil",
            "Bake in a heated oven at 180 for 20 minutes on turbo",
            "With an appetite!"
        ]
        },
        {
            Id:6,
            Name:"number cake",
            UserId:3,
            CategoryId:4,
            Img:"https://www.misspetel.com/wp-content/uploads/2018/02/DSC_3995c-819x1024.jpg",
            Duration:90,
            Difficulty:3,
            Description: "Numbers cake - ingredients for one digit",
            Ingrident:[
                {"Name":"For the dough: flour and almond powder","Count":"90 90","Type":"gram"},
                {"Name":"powdered sugar","Count":"50","Type":"gram"},
                {"Name":"Butter","Count":"100","Type":"gram"},
                {"Name":"Egg","Count":"1","Type":"-"},
                {"Name":"lemon zest","Count":"1","Type":"from a medium lemon"},
                {"Name":"Salt","Count":"1","Type":"Pinch"},
                {"Name":"Lakram: Ritsi","Count":"250","Type":"from"},
                {"Name":"Pudding","Count":"2","Type":"Spoons"},
                {"Name":"Cream Patisserie/Cream Vanilla","Count":"2","Type":"Spoons"}
            ],
            Instructions:[
                "Mix all the dough ingredients together",
                "roll on baking paper",
                "make a template of a drawing/letter/number",
                "cut the dough accordingly",
                "take out the leftovers",
                "Bake at 180 until the dough is golden",
                "Don't touch the dough until it cools down",
                "put it in the freezer",
                "Now to make the cream:",
                "Whipping the Rich",
                "Slowly add the rest of the ingredients",
                "sprinkle like in the picture",
                "Decorate to the best of your imagination",
                "With an appetite!"
            ]
        }
    
        
]

// localStorage.setItem('recipe', JSON.stringify(recipe))

module.exports = recipe;