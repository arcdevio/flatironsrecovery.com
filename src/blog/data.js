var articles = [
    {
        title: 'The Importance of Being of Service in Addiction Recovery',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'community', 'addictions', 'treatment'],
        image: '/blog/images/beingofservice-thumb.jpg',
        path: '/blog/the-importance-of-being-of-service-in-addiction-recovery',
        description: 'An important part of a truly holistic recovery from addiction is being of service to others.',
    },
    {
        title: 'Parenting After Rehab: How to Rebuild Your Connection to Your Children in Recovery',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'community', 'addictions', 'treatment'],
        image: '/blog/images/parentingafterrehab-thumb.jpg',
        path: '/blog/how-to-rebuild-your-connection-to-your-children-in-recovery',
        description: 'As you go through addiction treatment, the ways in which your addiction has affected your loved ones, and especially your children, may begin to unsurface.',
    },
    {
        title: 'How Flatirons Recovery’s Model is Different from Traditional Residential Care',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'community', 'addictions', 'treatment'],
        image: '/blog/images/howflatironsrecoverysmodel-thumb.jpg',
        path: '/blog/how-our-model-is-different',
        description: 'Understanding the world of rehab and addiction treatment centers can sometimes be difficult.',
    },
    {
        title: '6 Ways to Enjoy a Sober Spring in Boulder',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'community', 'addictions', 'treatment'],
        image: '/blog/images/6ways-thumb.jpg',
        path: '/blog/6-ways-to-enjoy-a-sober-spring-in-boulder',
        description: 'You know what they say, "It’s a beautiful day to be sober!" This couldn’t apply more to springtime in Boulder Colorado, right at the foothills of the Rocky Mountains.',
    },
    {
        title: 'What is the Difference Between CBD and THC?',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'community', 'addictions', 'treatment'],
        image: '/blog/images/cbd-thumb.jpg',
        path: '/blog/what-is-the-difference-between-cbd-and-thc',
        description: 'CBD, or Cannabidiol, is the second most prevalent compound found in cannabis. It can be derived from either hemp or marijuana, though is most often forced from hemp.',
    },
    {
        title: 'Can Yoga Help with Overcoming Addiction?',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'community', 'addictions', 'treatment'],
        image: '/blog/images/yoga-thumb.jpg',
        path: '/blog/can-yoga-help-with-overcoming-addiction',
        description: 'At Flatirons Recovery, we integrate yoga specifically tailored towards early addiction recovery into our programming because we know how extraordinarily beneficial it is to our clients.',
    },
    {
        title: 'What is Holistic Treatment for Methamphetamine Addiction?',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'community', 'addictions', 'treatment'],
        image: '/blog/images/holisticmethtreatment-thumb.jpg',
        path: '/blog/what-is-holistic-treatment-for-methamphetamine-addiction',
        description: 'We consider methamphetamine addiction to be a coping mechanism for deeper issues in a person’s life, such as underlying depression, anxiety, stress, or trauma.',
    },
    {
        title: 'Recognizing the Signs of High-Functioning Alcoholism',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'community', 'relationships', 'addictions', 'treatment'],
        image: '/blog/images/highfunctioningalcoholism-rename.jpg',
        path: '/blog/recognizing-the-signs-of-high-functioning-alcoholism',
        description: 'Some may believe that to truly be an alcoholic, these consequences must be so severe that the person’s life is completely falling apart.',
    },
    {
        title: 'How Mindfulness and Meditation Help with Drug and Alcohol Cravings',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'community', 'relationships', 'addictions', 'treatment'],
        image: '/blog/images/mindfulness2-thumb.jpg',
        path: '/blog/mindfulness-meditation-helps-with-cravings',
        description: 'Mindfulness is a tool that has been scientifically proven to help lessen a wide array of mental health symptoms common in early addiction recovery, including cravings to use drugs or alcohol.',
    },
    {
        title: 'Why are Healthy Boundaries so Important in Addiction Recovery?',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'community', 'relationships', 'addictions', 'treatment'],
        image: '/blog/images/healthyboundaries-thumb.jpg',
        path: '/blog/why-are-healthy-boundaries-so-important-in-addiction-recovery',
        description: 'Learning to set and maintain healthy boundaries is a common part of early addiction recovery, and a key in maintaining a healthy, thriving long-term sober life.',
    },
    {
        title: 'Can I get Addicted to Marijuana?',
        author: 'Rachael Uris, MA',
        categories: ['addictions', 'treatment'],
        image: '/blog/images/marijuana-thumb.jpg',
        path: '/blog/can-i-get-addicted-to-marijuana',
        description: 'Unfortunately, 30% of those who use marijuana have a form of what is called Marijuana Use Disorder, the most severe cases of which have developed a serious addiction to the drug.',
    },
    {
        title: 'How Art Therapy Helps to Heal the Wounds of Addiction',
        author: 'Rachael Uris, MA',
        categories: ['mental-health', 'addictions', 'treatment', 'community'],
        image: '/blog/images/artterapy2-thumb.jpg',
        path: '/blog/how-art-therapy-helps-to-heal-the-wounds-of-addiction',
        description: 'When an addiction treatment center includes art therapy in their recovery curriculum, it gives clients the opportunity to process whatever feelings may be under the surface but inaccessible to the logical brain.',
    },
    {
        title: 'Cocaine and Anxiety: Can cocaine cause an anxiety disorder?',
        author: 'Rachael Uris, MA',
        categories: ['mental-health', 'addictions', 'treatment', 'community'],
        image: '/blog/images/cocaineandanxiety-thumb.jpg',
        path: '/blog/can-cocaine-cause-anxiety-disorder',
        description: 'Unfortunately, cocaine use is most likely going to make a person’s anxiety worse in the long run, and may even bring about clinical anxiety for someone who has not previously struggled with anxiety in the past.',
    },
    {
        title: 'How Buddhist-Inspired Addiction Treatment is Different',
        author: 'Rachael Uris, MA',
        categories: ['mental-health', 'addictions', 'treatment'],
        image: '/blog/images/howbuddhism-thumb.jpg',
        path: '/blog/buddhist-inspired-addiction-treatment',
        description: 'All treatment modalities that contain elements of Buddhist practices have been scientifically proven to treat a wide array of mental health issues, including addiction to drugs and alcohol.',
    },
    {
        title: 'What Does Treatment for Heroin Look Like?',
        author: 'Rachael Uris, MA',
        categories: [ 'mental-health', 'addictions', 'treatment' ],
        image: '/blog/images/heroin-thumb.jpg',
        path: '/blog/what-does-treatment-for-heroin-look-like',
        description: 'Heroin is a narcotic in the opiate family that originates from morphine. Heroin is an illicit drug that is sold in a white, brown, or black powder.',
    },
    {
        title: 'Benefits of Traveling for Treatment',
        author: 'Rachael Uris, MA',
        categories: ['treatment', 'community'],
        image: '/blog/images/travelingfortreatment-thumb.jpg',
        path: '/blog/benefits-of-traveling-for-treatment',
        description: 'Addiction to drugs or alcohol develops in, and continues to be reinforced by our environment, or the “systems” in which we find ourselves, such as our family, friends, or community.',
    },
    {
        title: 'The Link Between Eating Disorders and Drug or Alcohol Addiction',
        author: 'Sarah Levin, LPC',
        categories: ['mental health', 'addictions', 'treatment'],
        image: '/blog/images/eatingdisorder-thumb.jpg',
        path: '/blog/eating-disorders-and-drug-or-alcohol-addiction',
        description: 'Contrary to popular belief, eating disorders do not only affect the Western world, and they don’t only affect females either; they are equal opportunity conditions.',
    },
    {
        title: 'What is Sex Addiction, and is it Similar to Substance Addiction?',
        author: 'Rachael Uris, MA',
        categories: ['addictions', 'treatment'],
        image: '/blog/images/sexaddiction-thumb.jpg',
        path: '/blog/what-is-sex-addiction',
        description: 'Sex addiction happens when sexual behaviors negatively impact our daily functioning, and we find ourselves unable to change our behaviors despite their negative consequences.',
    },
    {
        title: 'We Aren’t Here to Fix you Because You’re not Broken',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'addictions', 'treatment'],
        image: '/blog/images/wearentheartofixyou-thumb.jpg',
        path: '/blog/we-arent-here-to-fix-you-because-youre-not-broken',
        description: 'Our Foundation of Basic Goodness. Basic Goodness is the concept that we are—innately and forever—good at our core.',
    },
    {
        title: 'COVID-19, Loneliness, and Addiction',
        author: 'Rachael Uris, MA',
        categories: ['addictions', 'mental health', 'treatment', 'community', 'relationships'],
        image: '/blog/images/man-mask-thumb.jpg',
        path: '/blog/COVID-19-loneliness-and-addiction',
        description: 'Over the course of the COVID-19 pandemic, our country has witnessed a devastating spike in substance abuse, addiction, and drug and alcohol related deaths.',
    },
    {
        title: 'What are the Effects of Alcohol Addiction?',
        author: 'Sarah Levin, LPC',
        categories: ['addictions', 'mental health', 'treatment'],
        image: '/blog/images/alcohol-addiction-thumb.jpg',
        path: '/blog/what-are-the-effects-of-alcohol-addiction',
        description: 'Alcohol affects the brain on a number of levels, learn about the effects of alcoholism and the signs of alcohol addiction.',
    },
    {
        title: 'Five New Years Resolutions for Early Recovery',
        author: 'Rachael Uris, MA',
        categories: ['addictions', 'mental health', 'treatment', 'community', 'relationships'],
        image: '/blog/images/fivenewyearsresolutions-thumb.jpg',
        path: '/blog/five-new-years-resolutions-for-early-recovery',
        description: 'Yes, we want to grow. Of course we do! Why else would we be on the recovery path if not to better ourselves and our lives?',
    },
    {
        title: 'Mental Illness and Meditation',
        author: 'Sarah Levin, LPC',
        categories: ['addictions', 'mental health', 'treatment'],
        image: '/blog/images/mentalillnessandmeditation-thumb.jpg',
        path: '/blog/mental-illness-and-meditation',
        description: 'The skeptical scientist in me looked for tangible things to grasp, and I couldn’t see how mindfulness had anything to do with science...',
    },
    {
        title: 'Aimless Wandering: a Mindfulness Practice for Early Addiction Recovery',
        author: 'Rachael Uris, MA',
        categories: ['addictions', 'mental health', 'treatment', 'community', 'relationships'],
        image: '/blog/images/aimless-wandering-thumb.jpg',
        path: '/blog/aimless-wandering',
        description: 'Mindfulness has been scientifically proven to decrease substance use cravings, depression, anxiety, stress, and panic.',
    },
    {
        title: 'Addiction Recovery During the Holidays: How to Cope, Grieve, and Heal',
        author: 'Rachael Uris, MA',
        categories: ['addictions', 'mental health', 'treatment', 'community', 'relationships'],
        image: '/blog/images/holidays-thumb.jpg',
        path: '/blog/addiction-recovery-during-the-holidays',
        description: 'For many, especially for those recovering from addiction, the holidays bring a blizzard of emotional turmoil that is hard to understand.',
    },
    {
        title: 'Exercise in Early Addiction Recovery Treatment',
        author: 'Rachael Uris, MA',
        categories: ['mental health'],
        image: '/blog/images/exercise1-thumb.jpg',
        path: '/blog/exercise-in-early-addiction-recovery-treatment',
        description: 'Regular exercise is an essential part of holistic recovery from addiction. Not only does exercise support physical health in countless ways, it also greatly benefits mental and emotional wellbeing.',
    },
    {
        title: 'A Mindfulness Exercise on Gratitude for Thanksgiving',
        author: 'Rachael Uris, MA',
        categories: ['community', 'relationships', 'mental health'],
        image: '/blog/images/thanksgiving1-thumb.jpg',
        path: '/blog/a-mindfulness-exercise-on-gratitude-for-thanksgiving',
        description: 'A mindfulness exercise on gratitude. Consider trying this practice by reading it aloud as you sit down to your Thanksgiving dinner.',
    },
    {
        title: 'EMDR in Early Addiction Recovery Treatment',
        author: 'Rachael Uris, MA',
        categories: ['addictions', 'treatment', 'mental health'],
        image: '/blog/images/EMDR1-thumb.jpg',
        path: '/blog/emdr-in-early-addiction-recovery-treatment',
        description: 'EMDR (Eye Movement Desensitization and Reprocessing) is a type of therapy that can be extremely helpful in healing from addiction, trauma, and other life stresses.',
    },
    {
        title: 'Self Care Plan for Early Addiction Recovery',
        author: 'Rachael Uris, MA',
        categories: ['addictions', 'mental health', 'treatment', 'community'],
        image: '/blog/images/selfcare-thumb.jpg',
        path: '/blog/self-care-plan-for-early-addiction-recovery',
        description: 'Setting the intention to practice self-love and self-care instead of self-neglect or self-harm is a powerful way to build a foundation from which we can heal and thrive.',
    },
    {
        title: 'What is Mindful Eating and how can it help support addiction recovery?',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'addictions', 'treatment'],
        image: '/blog/images/mindfulEating1.jpg',
        path: '/blog/what-is-mindful-eating-and-how-can-it-help-support-addiction-recovery',
        description: 'Mindful eating is a way of having a relationship with food. A holistic approach to addiction recovery includes developing this mindful relationship to food.',
    },
    {
        title: 'Mindfulness Exercises to Support Early Addiction Recovery',
        author: 'Rachael Uris, MA',
        categories: ['mental health', 'addictions', 'treatment'],
        image: '/blog/images/mindfulness-thumb.jpg',
        path: '/blog/mindfulness-exercises-to-support-early-addiction-recovery',
        description: 'Mindfulness, or the practice of noticing one’s experience without judgement, has been shown to be highly effective with managing anxiety, panic, depression, anger, and drug/alcohol cravings in early recovery.',
    }
];