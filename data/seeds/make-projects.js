const projects = [
    //1
    {
      project_name: 'Recycled Tincan Windsocks',
      project_description:
        'Make this colorful Recycled Tin Can Windsock kids craft with supplies you have at home! Quick, easy, and SUPER fun for all ages!',
      project_completed: 1,
    },
    //2
    {
      project_name: 'Cupcake Liner Butterfly Clothespins',
      project_description:
        'If you have an abundance of cute cupcake liners in your pantry (like me) you can use a few to make some clothespin butterflies! You can also add a magnet on the back to stick on the fridge or just make them for kids to play with.',
      project_completed: 2,
    },
    //3
    {
      project_name: 'Homemade Microwave Puffy Paint',
      project_description:
        'DIY paint that puffs up in the microwave? Sounds like a surefire hit to me!',
      project_completed: 2,
    },
  ];
  
  const resources = [
    // Tincan Windsocks
    //1
    {
      resource_name: 'Clean Recycled Can',
      resource_description:
        'Any size will work! Just wash and set it to the side to dry. Tip: line the inside rim of the cans with a layer or two of thick masking or duct tape to avoid sharp edges!',
    },
    //2
    {
      resource_name: 'Acrylic Paint & Paintbrushes',
      resource_description:
        'Any colors and brushes you like or have on hand will be fine! Tip: Choosing a larger brush will cut back on painting time!',
    },
    //3
    {
      resource_name: 'Glue',
      resource_description:
        'We prefer Elmer’s Craft Bond Glue, Tacky Glue, or a Low-Temp Glue Gun!',
    },
    //4
    {
      resource_name: 'Glitter',
      resource_description:
        'Optional embellishments like Glitter, Stickers, Gemstones, Sequins, etc. as desired are also super fun to use!',
    },
    //5
    {
      resource_name: 'Assorted Ribbons',
      resource_description:
        'You could also use Yarn, Colored Paper, etc.',
    },
    //6
    {
      resource_name: 'Masking Tape',
      resource_description: 'Duct Tape will work too!',
    },
    //Cupcake Liner Butterfly Clothespins
    //7
    {
      resource_name: '2 Cupcake liners',
      resource_description:
        'We usually but these from the dollar store, but you can get them at any grocery store!',
    },
    //8
    {
      resource_name: 'Clothespins',
      resource_description:
        'Wooden ones seem to work best and are safest for the kids.',
    },
    //9
    {
      resource_name: 'Glue and Glitter',
      resource_description:
        'Elmer’s Craft Bond Glue, and whatever color glitter you prefer!',
    },
    //10
    {
      resource_name: 'String/Yarn',
      resource_description: 'Whatever you have on hand is perfectly fine!',
    },
    //Homemade Microwave Puffy Paint
    //11
    {
      resource_name: 'Flour/Baking Soda/Salt',
      resource_description:
        'One cup of flour, 3 tspb of baking soda, 1 tsp of salt.',
    },
    //12
    {
      resource_name: 'Water',
      resource_description:
        'Add enough to the mixture of flour, baking soda, and salt to make it the consistency of pancake batter! Mix into separte parts for each tube of color.',
    },
    //13
    {
      resource_name: 'Food Coloring',
      resource_description:
        'Add enough to the pancake batter mixture to get your desired shade!',
    },
    //14
    {
      resource_name: 'Rubber bands and Plastic baggies',
      resource_description:
        'Add colored mixture to plastic baggies and rubber bands them. Snip one corner of the bag to make painting with it easier!',
    },
    //15
    {
      resource_name: 'Paper (microwave safe!)',
      resource_description:
        'Construction paper or white printer paper works just fine!',
    },
  ];
  
  const tasks = [
    // Tincan Windsocks
    //1
    {
      task_description: 'Start by painting the can in colors of your choice.',
      task_notes:
        'Tip: line the inside rim of the cans with a layer or two of thick masking or duct tape to avoid sharp edges!',
      task_completed: 0,
      project_id: 1,
    },
    //2
    {
      task_description: 'After the paint is dry, use glue to attach colorful ribbons to the bottom rim of the can.',
      task_notes:
        'We also added a ribbon to the top of the can for hanging.',
      task_completed: 0,
      project_id: 1,
    },
    //Cupcake Liner Butterfly Clothespins
    //3
    {
      task_description: 'Start by opening up 2 cupcake liners and fold them in half. Then fold them again and glue them together.',
      task_notes:
        'So it looks like a bow tie!',
      task_completed: 0,
      project_id: 2,
    },
    //4
    {
      task_description: 'Clip the clothespin over the cupcake liners and add a strip of glue on top.',
      task_notes:
        '',
      task_completed: 1,
      project_id: 2,
    },
    //5
    {
      task_description: 'Sprinkle on some pretty glitter and add some string for the antennas if you want to.',
      task_notes:
        'It\'s tricky to glue them on that\'s why we only did one!',
      task_completed: 1,
      project_id: 2,
    },
    //Homemade Microwave Puffy Paint
    //6
    {
      task_description: 'We started with one cup of flour and mixed in 3 teaspoons of baking powder, 1 teaspoon of salt mixed together in a small bowl.',
      task_notes:
        '',
      task_completed: 1,
      project_id: 3,
    },
    //7
    {
      task_description: 'Add enough water to make it the consistency of pancake batter to that mixture and stir, stir, stir!',
      task_notes:
        '',
      task_completed: 1,
      project_id: 3,
    },
    //8
    {
      task_description: 'Divide your mix into four parts and put them into snack size Ziploc baggies along with some food coloring.',
      task_notes:
        'Part of the fun is squishing it all around to mix up the colors!',
      task_completed: 1,
      project_id: 3,
    },
    //9
    {
      task_description: 'Rubber band the baggies like you would if you were icing a cake and snip off the teeniest little bit of the tip.',
      task_notes:
        '',
      task_completed: 1,
      project_id: 3,
    },
    //10
    {
      task_description: 'Paint away!',
      task_notes:
        'When you’re finished, pop the painting into the microwave for 30-45 seconds and watch the paint puff up and grow – such fun! ',
      task_completed: 1,
      project_id: 3,
    },
  ];
  
  const project_resources = [
    { resource_id: 1, project_id: 1 },
    { resource_id: 2, project_id: 1 },
    { resource_id: 3, project_id: 1 },
    { resource_id: 4, project_id: 1 },
    { resource_id: 5, project_id: 1 },
    { resource_id: 6, project_id: 1 },
    { resource_id: 7, project_id: 2 },
    { resource_id: 8, project_id: 2 },
    { resource_id: 9, project_id: 2 },
    { resource_id: 10, project_id: 2 },
    { resource_id: 11, project_id: 3 },
    { resource_id: 12, project_id: 3 },
    { resource_id: 13, project_id: 3 },
    { resource_id: 14, project_id: 3 },
    { resource_id: 15, project_id: 3 },
  ]
  
  exports.seed = async function (knex) {
    await knex('projects').insert(projects);
    await knex('resources').insert(resources);
    await knex('tasks').insert(tasks);
    await knex('project_resources').insert(project_resources);
  };
  