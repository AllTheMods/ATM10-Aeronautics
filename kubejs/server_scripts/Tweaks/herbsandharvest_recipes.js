// This File has been authored by Muwrah and ChatGPT for use in AllTheMods 10 Aeronautics
// This File was created with the intention of fixing a few recipes that were non-functional in the Mama's Herbs and Harvest mod
// This is not the most elegant solution, but it is a solution.  Ideally the recipe would use all types of pork, but the original recipe called for a minecraft:barrier which didnt include any.  Using my very limited skills here, I created a solution that simply uses minecraft:porkchop to be the only usable pork which makes pepperoni and sausage.

ServerEvents.recipes(event => {
    // Fix the pepperoni recipe
    event.remove({
        output: 'herbsandharvest:pepperoni'
    });

    event.shaped(
        Item.of('herbsandharvest:pepperoni'),
        [
            'BPG',
            'RM ',
            '   '
        ],
        {
            B: 'minecraft:beef',
            P: 'minecraft:porkchop',
            G: 'herbsandharvest:minced_garlic',
            R: 'herbsandharvest:ground_peppercorn',
            M: 'herbsandharvest:mustard_seeds'
        }
    );

    // Fix the sausage recipe
    event.remove({
        output: 'herbsandharvest:sausage'
    });

    event.shaped(
        Item.of('herbsandharvest:sausage'),
        [
            'PGR',
            'TWS',
            'C  '
        ],
        {
            P: 'minecraft:porkchop',
            G: 'herbsandharvest:minced_garlic',
            R: 'herbsandharvest:chopped_sage',
            T: 'herbsandharvest:chopped_thyme',
            W: 'herbsandharvest:chopped_rosemary',
            S: 'herbsandharvest:salt',
            C: 'herbsandharvest:ground_peppercorn'
        }
    );
});

// This File has been authored by Muwrah and ChatGPT for use in AllTheMods 10 Aeronautics
// This File was created with the intention of fixing a few recipes that were non-functional in the Mama's Herbs and Harvest mod
