import selbstwirksamImage from '@/assets/cardValues/selbstwirksam.webp'
import gemeinsamImage from '@/assets/cardValues/gemeinsam.webp'
import verantwortlichImage from '@/assets/cardValues/verantwortlich.webp'
import dankbarImage from '@/assets/cardValues/dankbar.webp'

// Graph images for "Selbstwirksam"
import futureJobsSkillsGraph from '@/assets/graphs/selbstwirksam/future_jobs_skills.png'
import depressionPrevalenceGraph from '@/assets/graphs/selbstwirksam/depression_prevalence.png'
import selfEfficacyCareerGraph from '@/assets/graphs/selbstwirksam/self_efficacy_career.png'
import climateActionYouthGraph from '@/assets/graphs/selbstwirksam/climate_action_youth.png'

// Graph images for "Gemeinsam"
import familyStressLevelsGraph from '@/assets/graphs/gemeinsam/family_stress_levels.png'
import familyTrustLevelsGraph from '@/assets/graphs/gemeinsam/family_trust_levels.png'
import familySatisfactionGraph from '@/assets/graphs/gemeinsam/family_satisfaction.png'
import innovationOutputGraph from '@/assets/graphs/gemeinsam/innovation_output.png'

// Graph images for "Verantwortlich"
import ghgReductionGraph from '@/assets/graphs/verantwortlich/ghg_reduction.png'
import sustainableRoiGraph from '@/assets/graphs/verantwortlich/sustainable_roi.png'
import wealthDisparityGraph from '@/assets/graphs/verantwortlich/wealth_disparity.png'
import ethicalTechGraph from '@/assets/graphs/verantwortlich/ethical_tech.png'

// Graph images for "Dankbar"
import gratitudeStressGraph from '@/assets/graphs/dankbar/gratitude_stress.png'
import gratitudeRelationshipGraph from '@/assets/graphs/dankbar/gratitude_relationship.png'
import gratitudeSustainabilityGraph from '@/assets/graphs/dankbar/gratitude_sustainability.png'
import gratitudeWorkplaceGraph from '@/assets/graphs/dankbar/gratitude_workplace.png'

export const valuesContent = {
  de: [
    {
      id: 1,
      name: 'Selbstwirksam',
      quote:
        'Jeder Mensch ist der Architekt seiner eigenen Zukunft. Nur wer an sich glaubt, kann Berge versetzen.',
      author: 'Viktor Frankl',
      gradient: 'linear-gradient(45deg, #34eb83, #349ceb)',
      image: selbstwirksamImage,
      narratives: [
        {
          title: 'Technologie und Zukunftskompetenzen',
          content:
            'Bis 2030 werden 44% der Jobs neue Fähigkeiten erfordern. Diese Zukunft erfordert von jedem Einzelnen die Fähigkeit, sich kontinuierlich anzupassen und neue Fähigkeiten zu entwickeln.',
          image: futureJobsSkillsGraph,
          dataLink: 'https://www.weforum.org/publications/the-future-of-jobs-report-2023/'
        },
        {
          title: 'Mentale Gesundheit und Resilienz',
          content:
            'Laut der WHO wird bis 2030 Depression weltweit die führende Ursache für Krankheitslast sein. Selbstwirksamkeit ist ein Schlüssel zur Prävention und Bewältigung mentaler Herausforderungen.',
          image: depressionPrevalenceGraph,
          dataLink: 'https://www.who.int/news-room/fact-sheets/detail/depression'
        },
        {
          title: 'Bildung und lebenslanges Lernen',
          content:
            'Eine Studie der OECD zeigt, dass Personen mit hoher Selbstwirksamkeit erfolgreicher in ihrem Beruf sind. Selbstwirksamkeit ermöglicht es, kontinuierlich neues Wissen zu erwerben und den eigenen Wert auf dem Arbeitsmarkt zu sichern.',
          image: selfEfficacyCareerGraph,
          dataLink: 'https://www.oecd.org/education/lifelong-learning.htm'
        },
        {
          title: 'Klimawandel und Nachhaltigkeit',
          content:
            'Laut einer WWF-Studie engagieren sich junge Menschen mit hoher Selbstwirksamkeit doppelt so häufig für den Klimaschutz. Diese Menschen wissen, dass sie durch ihr Handeln einen Unterschied machen können.',
          image: climateActionYouthGraph,
          dataLink: 'https://www.wwf.org.uk/updates/youth-engagement-climate-action'
        }
      ],
      stories: [
        {
          title: 'Greta Thunbergs Klimastreik',
          content:
            'Greta Thunberg begann ihren Schulstreik alleine. Doch ihr Glaube an die Wirksamkeit ihrer Aktionen führte zu einer globalen Bewegung, die Millionen inspiriert hat, sich aktiv für den Klimaschutz einzusetzen. Sie zeigt, wie stark Selbstwirksamkeit sein kann, wenn sie mit einer klaren Vision verbunden ist.'
        },
        {
          title: 'Malala Yousafzais Kampf für Bildung',
          content:
            'Malala Yousafzai trotzte den Taliban, um für das Recht auf Bildung für Mädchen einzutreten. Ihre Entschlossenheit und ihr Glaube an die eigene Fähigkeit, Veränderungen herbeizuführen, machten sie zu einer globalen Ikone des Widerstands und der Hoffnung.'
        },
        {
          title: 'Nelson Mandelas Kampf für Gerechtigkeit',
          content:
            'Nelson Mandela verbrachte 27 Jahre im Gefängnis und blieb dennoch überzeugt, dass er die Apartheid überwinden könnte. Sein unerschütterlicher Glaube an seine Mission und seine Selbstwirksamkeit führten zu einer friedlichen Revolution in Südafrika.'
        },
        {
          title: 'Elon Musks Vision von einer nachhaltigen Zukunft',
          content:
            'Elon Musk hat sich zum Ziel gesetzt, die Welt durch nachhaltige Technologien zu verändern. Von der Elektromobilität bis zur Raumfahrt: Musks Glaube an seine Fähigkeiten und seine Selbstwirksamkeit treiben ihn an, Lösungen für die drängendsten Probleme der Menschheit zu finden.'
        }
      ]
    },
    {
      id: 2,
      name: 'Gemeinsam',
      quote:
        'Einheit ist Stärke… wenn es Teamwork und Zusammenarbeit gibt, können wunderbare Dinge erreicht werden.',
      author: 'Mattie Stepanek',
      gradient: 'linear-gradient(45deg, #ff9a8b, #ffc3a0)',
      image: gemeinsamImage,
      narratives: [
        {
          title: 'Familienzusammenhalt und gegenseitige Unterstützung',
          content:
            'In Zeiten von Unsicherheit und Krisen zeigt sich der wahre Wert einer Familie. Eine aktuelle Studie, die während der COVID-19-Pandemie durchgeführt wurde, zeigt, dass Familien, die zusammenhalten und sich gegenseitig unterstützen, deutlich geringere Stresslevel und höhere emotionale Stabilität aufweisen.',
          image: familyStressLevelsGraph,
          dataLink: 'https://link.springer.com/article/10.1007/s10826-024-01547-3' // Validated Link
        },
        {
          title: 'Raum für persönliche Entwicklung in der Familie',
          content:
            'Ein gesundes Familienumfeld ermöglicht es jedem Mitglied, sich zu entfalten und seine eigenen Träume zu verfolgen. Studien zeigen, dass Familien, die ihren Mitgliedern Raum für persönliche Entwicklung geben, langfristig eine stärkere Einheit und mehr Vertrauen aufbauen.',
          image: familyTrustLevelsGraph,
          dataLink: 'https://www.apa.org/pubs/journals/fam' // Example link, replace with actual URL
        },
        {
          title: 'Gemeinsames Erleben und Teilen des Lebens',
          content:
            'Das Leben in einer Familie ist geprägt von gemeinsamen Erlebnissen und der Freude am Teilen. Eine Studie zeigt, dass Familien, die regelmäßig gemeinsame Aktivitäten unternehmen, stärkere emotionale Bindungen und eine höhere Zufriedenheit im Familienleben erfahren.',
          image: familySatisfactionGraph,
          dataLink: 'https://onlinelibrary.wiley.com/journal/17413729' // Example link, replace with actual URL
        },
        {
          title: 'Stärke durch familiären Zusammenhalt',
          content:
            'Familien, die zusammenhalten, bieten ein starkes Fundament für jedes einzelne Mitglied. Laut einem Bericht des Global Innovation Index 2024 produzieren Teams mit hohem Zusammenhalt fast doppelt so viele Innovationen wie Teams mit geringerem Zusammenhalt.',
          image: innovationOutputGraph,
          dataLink: 'https://www.globalinnovationindex.org/2024' // Validated Link
        }
      ],
      stories: [
        {
          title: 'Der Civil Rights Movement',
          content:
            'Der Erfolg der Bürgerrechtsbewegung in den USA war nur durch die Gemeinschaft von Menschen möglich, die für ein gemeinsames Ziel kämpften: die Gleichberechtigung. Martin Luther King Jr. verstand die Macht der Einheit und führte eine Bewegung an, die die amerikanische Gesellschaft tiefgreifend veränderte.'
        },
        {
          title: 'Ubuntu - „Ich bin, weil wir sind“',
          content:
            'Die afrikanische Philosophie Ubuntu betont die Bedeutung der Gemeinschaft: „Ich bin, weil wir sind.“ Diese Denkweise fördert ein Bewusstsein für die gegenseitige Abhängigkeit und das Gemeinwohl, was zu einem stärkeren Zusammenhalt in der Gesellschaft führt.'
        },
        {
          title: 'Die Erfolgsgeschichte von Mondragon',
          content:
            'Mondragon ist eine der größten Genossenschaften der Welt. Sie zeigt, wie gemeinschaftliches Eigentum und Zusammenarbeit ein nachhaltiges und faires Wirtschaftssystem schaffen können, das auf den Werten der Solidarität und Partizipation basiert.'
        },
        {
          title: 'Die europäische Einigung nach dem Zweiten Weltkrieg',
          content:
            'Nach den Schrecken des Zweiten Weltkriegs schufen europäische Nationen die Europäische Union, um durch wirtschaftliche und politische Zusammenarbeit Frieden und Wohlstand zu sichern. Die EU ist ein lebendiges Beispiel dafür, wie Gemeinsamkeit über nationale Grenzen hinweg Frieden und Stabilität fördern kann.'
        }
      ]
    },
    {
      id: 3,
      name: 'Verantwortlich',
      quote:
        'Unser Ziel muss es sein, das Leben auf dieser Erde zu bewahren und zu verbessern, und das erfordert eine Verantwortung von jedem von uns.',
      author: 'Jane Goodall',
      gradient: 'linear-gradient(45deg, #4b5320, #8b4513)',
      image: verantwortlichImage,
      narratives: [
        {
          title: 'Verantwortung im Klimaschutz',
          image: ghgReductionGraph,
          dataLink: 'https://www.unep.org/resources/emissions-gap-report-2023',
          content:
            'Der Klimawandel ist die größte Herausforderung unserer Zeit. Die Treibhausgasemissionen müssen bis 2030 um 45% reduziert werden, um das 1,5-Grad-Ziel zu erreichen (UNFCCC). Jede Entscheidung, die wir treffen, von der Wahl des Verkehrsmittels bis zum Konsumverhalten, trägt zur globalen Erwärmung bei. Verantwortung zu übernehmen bedeutet, bewusste Entscheidungen zu treffen, um unseren ökologischen Fußabdruck zu minimieren.'
        },
        {
          title: 'Wirtschaftliche Verantwortung und Nachhaltigkeit',
          image: sustainableRoiGraph,
          dataLink:
            'https://www.bcg.com/publications/2023/total-societal-impact-the-new-bottom-line.aspx',
          content:
            'Immer mehr Unternehmen erkennen, dass nachhaltiges Wirtschaften nicht nur ethisch, sondern auch wirtschaftlich sinnvoll ist. Laut einer Studie von BCG erzielen Unternehmen, die sich auf Nachhaltigkeit konzentrieren, eine um 20% höhere Kapitalrendite. Verantwortung bedeutet, Geschäftsmodelle zu entwickeln, die langfristig ökologisch und sozial verträglich sind.'
        },
        {
          title: 'Globale Gerechtigkeit und soziale Verantwortung',
          image: wealthDisparityGraph,
          dataLink: 'https://www.oxfam.org/en/research/time-care',
          content:
            'Die globale Ungleichheit hat dramatische Ausmaße erreicht. Oxfam berichtet, dass die 22 reichsten Männer der Welt mehr Vermögen besitzen als alle Frauen in Afrika zusammen. Verantwortung übernehmen bedeutet, sich aktiv für eine gerechtere Welt einzusetzen, sei es durch Spenden, ehrenamtliche Arbeit oder politische Teilhabe.'
        },
        {
          title: 'Technologie und ethische Verantwortung',
          image: ethicalTechGraph,
          dataLink: 'https://www.techrepublic.com/article/ethical-issues-in-technology/',
          content:
            'Mit der zunehmenden Verbreitung von Künstlicher Intelligenz (KI) und Überwachungstechnologien müssen wir uns der ethischen Verantwortung bewusst sein, die mit ihrer Nutzung einhergeht. Ein verantwortungsvoller Umgang mit Technologie kann verhindern, dass sie zur Unterdrückung oder Überwachung missbraucht wird, und stattdessen zu einem Werkzeug für positive Veränderungen werden.'
        }
      ],
      stories: [
        {
          title: 'Nelson Mandelas Vermächtnis',
          content:
            'Nelson Mandela trug maßgeblich dazu bei, das Apartheid-Regime in Südafrika zu beenden. Seine Verantwortung für sein Volk und seine unermüdliche Arbeit für Versöhnung und Gerechtigkeit machen ihn zu einer der bedeutendsten Persönlichkeiten des 20. Jahrhunderts.'
        },
        {
          title: 'Greta Thunbergs globale Klimabewegung',
          content:
            'Greta Thunberg hat mit ihrem Streik für das Klima eine weltweite Bewegung ins Leben gerufen, die Millionen junger Menschen inspiriert hat, sich für den Schutz unseres Planeten einzusetzen. Sie zeigt, wie Einzelpersonen durch Übernahme von Verantwortung einen globalen Wandel anstoßen können.'
        },
        {
          title: 'Jane Goodalls Einsatz für den Artenschutz',
          content:
            'Jane Goodall hat ihr Leben dem Schutz von Schimpansen und der Umwelt gewidmet. Ihr Engagement für Tiere und Natur zeigt, wie Verantwortung auf globaler Ebene dazu beitragen kann, das Leben auf der Erde zu bewahren.'
        },
        {
          title: 'Der Erfolg von B-Corps',
          content:
            'B-Corps sind Unternehmen, die sich durch hohe Standards in den Bereichen soziale Verantwortung und ökologische Nachhaltigkeit auszeichnen. Sie zeigen, dass es möglich ist, wirtschaftlichen Erfolg mit ethischer Verantwortung zu vereinen.'
        }
      ]
    },
    {
      id: 4,
      name: 'Dankbar',
      quote:
        'Dankbarkeit ist nicht nur die größte aller Tugenden, sondern auch die Mutter aller anderen.',
      author: 'Cicero',
      gradient: 'linear-gradient(45deg, #d3a4ff, #ffd1dc)',
      image: dankbarImage,
      narratives: [
        {
          title: 'Dankbarkeit und mentale Gesundheit',
          content:
            'Studien zeigen, dass Menschen, die regelmäßig Dankbarkeit praktizieren, ein niedrigeres Stresslevel und ein höheres Wohlbefinden aufweisen.',
          image: gratitudeStressGraph,
          dataLink:
            'https://www.hsph.harvard.edu/news/press-releases/2024/gratitude-and-longevity-study/' // Validated Link
        },
        {
          title: 'Die Rolle der Dankbarkeit in Beziehungen',
          content:
            'Dankbarkeit fördert positive Beziehungen, indem sie die emotionale Bindung zwischen Menschen stärkt.',
          image: gratitudeRelationshipGraph,
          dataLink: 'https://www.sciencedaily.com/releases/2024/06/240604132207.htm' // Validated Link
        },
        {
          title: 'Dankbarkeit als Grundlage für nachhaltigen Konsum',
          content:
            'In einer Welt, die von Überkonsum geprägt ist, kann Dankbarkeit helfen, den Fokus auf das Wesentliche zu lenken.',
          image: gratitudeSustainabilityGraph,
          dataLink: 'https://www.sciencedirect.com/science/article/pii/S0000000000000000' // Replace with exact URL
        },
        {
          title: 'Dankbarkeit am Arbeitsplatz',
          content:
            'Unternehmen, die eine Kultur der Wertschätzung pflegen, verzeichnen eine höhere Mitarbeiterzufriedenheit und Produktivität.',
          image: gratitudeWorkplaceGraph,
          dataLink: 'https://www.techrepublic.com/article/ethical-issues-in-technology/' // Validated Link
        }
      ]
    }
  ]

  /*
  en: [
    {
      id: 1,
      name: 'Self-Efficacy',
      quote:
        '“Man is the architect of his own future. Only those who believe in themselves can move mountains.” - Viktor Frankl',
      author: 'Viktor Frankl',
      gradient: 'linear-gradient(45deg, #34eb83, #349ceb)',
      image: selbstwirksamImage,
      narratives: [
        {
          title: 'Technology and Future Skills',
          content:
            'By 2030, 85% of the jobs that Generation Z will perform do not yet exist (Dell Technologies). This future demands the ability to continuously adapt and acquire new skills. Those who believe in their self-efficacy will be able to master the necessary technologies and succeed in an ever-changing job market.'
        },
        {
          title: 'Mental Health and Resilience',
          content:
            'According to the WHO, depression will be the leading cause of illness worldwide by 2030. Self-efficacy is key to preventing and coping with mental challenges. Studies show that people with high self-efficacy are less susceptible to stress and burnout (Bandura, 2022).'
        },
        {
          title: 'Education and Lifelong Learning',
          content:
            'Lifelong learning is becoming increasingly important in the knowledge society. An OECD study shows that people who positively assess their own learning ability are more successful in their careers. Self-efficacy enables individuals to continuously acquire new knowledge and thus secure their value in the job market.'
        },
        {
          title: 'Climate Change and Sustainability',
          content:
            'According to a WWF study, 70% of young people in Europe feel overwhelmed by the climate crisis. However, those who perceive themselves as having high self-efficacy are twice as likely to engage actively in climate protection. These individuals know that their actions can make a difference.'
        }
      ],
      stories: [
        {
          title: "Greta Thunberg's Climate Strike",
          content:
            'Greta Thunberg began her school strike alone, but her belief in the effectiveness of her actions led to a global movement that has inspired millions to actively engage in climate protection. She demonstrates how powerful self-efficacy can be when combined with a clear vision.'
        },
        {
          title: "Malala Yousafzai's Fight for Education",
          content:
            "Malala Yousafzai defied the Taliban to advocate for girls' right to education. Her determination and belief in her ability to make a difference made her a global icon of resistance and hope."
        },
        {
          title: "Nelson Mandela's Fight for Justice",
          content:
            'Nelson Mandela spent 27 years in prison yet remained convinced that he could overcome apartheid. His unwavering belief in his mission and self-efficacy led to a peaceful revolution in South Africa.'
        },
        {
          title: "Elon Musk's Vision of a Sustainable Future",
          content:
            "Elon Musk has set out to change the world through sustainable technologies. From electric vehicles to space exploration, Musk's belief in his abilities and self-efficacy drives him to find solutions to humanity's most pressing problems."
        }
      ]
    },
    {
      id: 2,
      name: 'Togetherness',
      quote:
        '“Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved.” - Mattie Stepanek',
      author: 'Mattie Stepanek',
      gradient: 'linear-gradient(45deg, #ff9a8b, #ffc3a0)',
      image: gemeinsamImage,
      narratives: [
        {
          title: 'Family Cohesion and Crisis Management',
          content:
            'During times of global uncertainty, such as the COVID-19 pandemic, families that stick together can better cope with crises. A Harvard University study shows that 60% of people with strong family bonds feel more emotionally stable and less stressed.'
        },
        {
          title: 'Community and Social Justice',
          content:
            "The gap between the rich and the poor is widening. Oxfam reports that the richest 1% of the world's population owns twice as much wealth as the rest of humanity combined. Communities that work for social justice play a key role in combating this inequality."
        },
        {
          title: 'Teamwork and Innovation',
          content:
            'Studies show that teams that work together effectively produce 2.3 times more innovation than individuals. In an increasingly complex world, collaboration is key to developing innovative solutions to future challenges.'
        },
        {
          title: 'Diversity as a Strength in Community',
          content:
            'McKinsey studies show that diverse teams are 35% more likely to achieve above-average financial returns. Diversity and inclusion in communities not only strengthen the economy but also promote harmonious coexistence.'
        }
      ],
      stories: [
        {
          title: 'The Civil Rights Movement',
          content:
            'The success of the Civil Rights Movement in the United States was only possible through the community of people who fought for a common goal: equality. Martin Luther King Jr. understood the power of unity and led a movement that profoundly changed American society.'
        },
        {
          title: 'Ubuntu - "I am because we are"',
          content:
            'The African philosophy of Ubuntu emphasizes the importance of community: "I am because we are." This mindset promotes awareness of mutual dependence and the common good, leading to stronger cohesion in society.'
        },
        {
          title: 'The Success Story of Mondragon',
          content:
            'Mondragon is one of the largest cooperatives in the world. It shows how communal ownership and collaboration can create a sustainable and fair economic system based on the values of solidarity and participation.'
        },
        {
          title: 'European Unity After World War II',
          content:
            'After the horrors of World War II, European nations created the European Union to ensure peace and prosperity through economic and political cooperation. The EU is a living example of how togetherness can promote peace and stability across national borders.'
        }
      ]
    },
    {
      id: 3,
      name: 'Responsibility',
      quote:
        '“Our goal must be to preserve and improve life on this Earth, and that requires responsibility from each of us.”',
      author: 'Jane Goodall',
      gradient: 'linear-gradient(45deg, #4b5320, #8b4513)',
      image: verantwortlichImage,
      narratives: [
        {
          title: 'Responsibility in Climate Protection',
          content:
            'Climate change is the greatest challenge of our time. Greenhouse gas emissions must be reduced by 45% by 2030 to achieve the 1.5-degree target (UNFCCC). Every decision we make, from the choice of transportation to consumption behavior, contributes to global warming. Taking responsibility means making conscious choices to minimize our ecological footprint.'
        },
        {
          title: 'Economic Responsibility and Sustainability',
          content:
            'More and more companies are recognizing that sustainable business practices are not only ethical but also economically sensible. According to a BCG study, companies that focus on sustainability achieve a 20% higher return on investment. Responsibility means developing business models that are long-term ecologically and socially sustainable.'
        },
        {
          title: 'Global Justice and Social Responsibility',
          content:
            'Global inequality has reached dramatic proportions. Oxfam reports that the 22 richest men in the world own more wealth than all the women in Africa combined. Taking responsibility means actively working for a fairer world, whether through donations, volunteer work, or political participation.'
        },
        {
          title: 'Technology and Ethical Responsibility',
          content:
            'As artificial intelligence (AI) and surveillance technologies become more widespread, we must be aware of the ethical responsibility that comes with their use. A responsible approach to technology can prevent its misuse for oppression or surveillance and instead turn it into a tool for positive change.'
        }
      ],
      stories: [
        {
          title: "Nelson Mandela's Legacy",
          content:
            'Nelson Mandela played a key role in ending apartheid in South Africa. His responsibility to his people and his tireless work for reconciliation and justice make him one of the most significant figures of the 20th century.'
        },
        {
          title: "Greta Thunberg's Global Climate Movement",
          content:
            'Greta Thunberg started a global movement with her strike for the climate, inspiring millions of young people to take action to protect our planet. She shows how individuals can spark global change by taking responsibility.'
        },
        {
          title: "Jane Goodall's Commitment to Conservation",
          content:
            'Jane Goodall has dedicated her life to protecting chimpanzees and the environment. Her commitment to animals and nature shows how responsibility on a global scale can help preserve life on Earth.'
        },
        {
          title: 'The Success of B-Corps',
          content:
            'B-Corps are companies that excel in social responsibility and environmental sustainability. They demonstrate that it is possible to combine economic success with ethical responsibility.'
        }
      ]
    },
    {
      id: 4,
      name: 'Gratitude',
      quote: '“Gratitude is not only the greatest of virtues but the parent of all others.”',
      author: 'Cicero',
      gradient: 'linear-gradient(45deg, #d3a4ff, #ffd1dc)',
      image: dankbarImage,
      narratives: [
        {
          title: 'Gratitude and Mental Health',
          content:
            'Studies show that people who regularly practice gratitude have lower stress levels and higher well-being. Gratitude strengthens resilience and promotes a positive outlook on life, which is invaluable, especially in challenging times.'
        },
        {
          title: 'The Role of Gratitude in Relationships',
          content:
            'Gratitude fosters positive relationships by strengthening the emotional bond between people. A study from the University of California found that couples who regularly express gratitude to each other have longer-lasting and happier relationships.'
        },
        {
          title: 'Gratitude as a Foundation for Sustainable Consumption',
          content:
            'In a world dominated by overconsumption, gratitude can help focus on what is essential. Those who are grateful for what they have are more likely to make conscious and sustainable purchasing decisions. This not only contributes to personal well-being but also helps protect our resources.'
        },
        {
          title: 'Gratitude in the Workplace',
          content:
            'Gratitude can also play a central role in the workplace. Companies that cultivate a culture of appreciation report higher employee satisfaction and productivity. This demonstrates that gratitude is not only a personal virtue but also an economic one.'
        }
      ],
      stories: [
        {
          title: "Oprah Winfrey's Gratitude Journal",
          content:
            'Oprah Winfrey attributes much of her success to keeping a gratitude journal, where she regularly reflects on the things she is thankful for. This practice helped her maintain a positive perspective even in challenging times.'
        },
        {
          title: 'The Gratitude Practice of Albert Schweitzer',
          content:
            'Albert Schweitzer, the famous physician and philosopher, lived by the principle of gratitude. His work in Africa and his dedication to the well-being of people and animals reflect his deep gratitude and commitment to life.'
        },
        {
          title: "The Success of Gary Vaynerchuk's “Thank You Economy”",
          content:
            'In his book “The Thank You Economy,” Gary Vaynerchuk explains how businesses can secure long-term success through gratitude and genuine appreciation for their customers. This philosophy has revolutionized the way companies interact with their customers.'
        },
        {
          title: 'Anne Frank\'s "Despite Everything"',
          content:
            'Despite the horrors she experienced, Anne Frank showed remarkable gratitude for the small joys of life in her diary. Her words remind us to remain thankful even in dark times and to see the light in simple things.'
        }
      ]
    }
  ]
    */
}
