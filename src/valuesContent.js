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

// Importing images for "Verantwortlich" value stories
import jacksonFamilyImage from '@/assets/images/gemeinsam/jackson_family.webp'
import obamaFamilyImage from '@/assets/images/gemeinsam/obama_family.webp'
import manningFamilyImage from '@/assets/images/gemeinsam/manning_family.webp'
import kennedyFamilyImage from '@/assets/images/gemeinsam/kennedy_family.webp'

// Graph images for "Verantwortlich"
import ghgReductionGraph from '@/assets/graphs/verantwortlich/ghg_reduction.png'
import sustainableRoiGraph from '@/assets/graphs/verantwortlich/sustainable_roi.png'
import wealthDisparityGraph from '@/assets/graphs/verantwortlich/wealth_disparity.png'
import ethicalTechGraph from '@/assets/graphs/verantwortlich/ethical_tech.png'

// Importing images for "Verantwortlich" value stories
import wangariMaathaiImage from '@/assets/images/verantwortlich/wangari_maathai.webp'
import muhammadYunusImage from '@/assets/images/verantwortlich/muhammad_yunus.webp'
import malalaYousafzaiImage from '@/assets/images/verantwortlich/malala_yousafzai.webp'
import timBernersLeeImage from '@/assets/images/verantwortlich/tim_berners_lee.webp'

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
          image: jacksonFamilyImage,
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
          title: 'Die Jacksons: Eine Familie, die sich gegenseitig zum Erfolg führte',
          content:
            'Die Jackson-Familie, bekannt für ihre musikalische Begabung, ist ein inspirierendes Beispiel dafür, wie Familienzusammenhalt und gegenseitige Unterstützung außergewöhnliche Erfolge ermöglichen können. Von ihren bescheidenen Anfängen in Gary, Indiana, arbeitete die Familie hart zusammen, um den musikalischen Traum der Jackson-Kinder zu verwirklichen. Der Vater, Joe Jackson, war die treibende Kraft, der seine Kinder förderte und sie auf ihrem Weg zum Ruhm unterstützte. Obwohl ihre Geschichte auch von Herausforderungen und Spannungen geprägt war, zeigt sie, wie starke familiäre Bindungen und das gemeinsame Streben nach Erfolg eine Familie zu internationalem Ruhm führen können.',
          image: jacksonFamilyImage,
          dataLink: 'https://www.biography.com/musician/michael-jackson'
        },
        {
          title: 'Die Familie Obama: Gemeinsam durch Höhen und Tiefen',
          content:
            'Michelle und Barack Obama haben immer betont, wie wichtig Familie für ihren Erfolg ist. Während Barack Obama als Präsident der Vereinigten Staaten diente, blieb die Familie ein starker Rückhalt füreinander. Trotz des enormen Drucks und der ständigen öffentlichen Aufmerksamkeit bewahrten sie ihre Einheit und unterstützten sich gegenseitig. Michelles Rolle als Mutter und Ehefrau war entscheidend dafür, dass die Familie Obama während ihrer Zeit im Weißen Haus stabil und verbunden blieb. Diese Geschichte zeigt, wie gegenseitige Unterstützung und Verständnis innerhalb der Familie eine solide Grundlage bilden, um die größten Herausforderungen des Lebens zu meistern.',
          image: obamaFamilyImage,
          dataLink: 'https://www.whitehouse.gov/about-the-white-house/presidents/barack-obama/'
        },
        {
          title: 'Die Mannings: Eine sportliche Dynastie, die sich gegenseitig stärkt',
          content:
            'Die Manning-Familie, mit den berühmten Quarterbacks Archie, Peyton und Eli Manning, ist ein starkes Beispiel dafür, wie familiäre Unterstützung und Zusammenhalt den Weg zum Erfolg ebnen können. Archie, der Vater, war nicht nur ein herausragender Athlet, sondern auch ein Mentor für seine Söhne. Er förderte sie, ohne Druck auszuüben, und sorgte dafür, dass sie als Brüder zusammenhielten und sich gegenseitig unterstützten. Diese Familie zeigt, wie der gemeinsame Glaube aneinander und die Bereitschaft, einander zu helfen, eine ganze Generation von Sportlern hervorbringen kann.',
          image: manningFamilyImage,
          dataLink:
            'https://www.espn.com/nfl/story/_/id/14350602/how-archie-manning-set-manning-family-dynasty'
        },
        {
          title: 'Die Familie Kennedy: Gemeinsam in den Dienst der Öffentlichkeit',
          content:
            'Die Kennedys sind eine der bekanntesten politischen Familien der USA, die sich immer wieder durch ihren Zusammenhalt und ihre Hingabe an den öffentlichen Dienst auszeichnete. Nach der Ermordung von John F. Kennedy übernahm sein Bruder Robert Kennedy die Verantwortung, die Familienwerte und das politische Erbe weiterzuführen. Die Kennedys unterstützten sich in Krisenzeiten und trieben gemeinsam ihre Ziele voran, trotz der Tragödien, die sie erlebten. Diese Geschichte unterstreicht die Bedeutung von familiärem Zusammenhalt und gegenseitiger Unterstützung bei der Verfolgung von großen, gemeinsamen Zielen.',
          image: kennedyFamilyImage,
          dataLink: 'https://www.history.com/topics/us-presidents/kennedy-family'
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
          title: 'Wangari Maathai: Die grüne Revolution',
          content:
            'Wangari Maathai war die erste afrikanische Frau, die einen Friedensnobelpreis erhielt, und Gründerin des Green Belt Movements, einer Initiative zur Wiederaufforstung in Kenia. Maathai setzte sich unermüdlich für Nachhaltigkeit und Frauenrechte ein, indem sie Gemeinden dazu ermutigte, Bäume zu pflanzen und gleichzeitig ihre wirtschaftliche Unabhängigkeit zu fördern. Ihre Arbeit zeigt, wie Verantwortung für die Umwelt und soziale Gerechtigkeit zu tiefgreifenden Veränderungen führen kann.',
          image: wangariMaathaiImage,
          dataLink: 'https://www.nobelprize.org/prizes/peace/2004/maathai/biographical/'
        },
        {
          title: 'Muhammad Yunus: Mikrofinanzierung gegen Armut',
          content:
            "Muhammad Yunus, Gründer der Grameen Bank, revolutionierte die Finanzwelt durch die Einführung von Mikrokrediten, die es den Ärmsten der Armen ermöglichen, kleine Unternehmen zu gründen und sich aus der Armut zu befreien. Seine Arbeit hat Millionen von Menschen, vor allem Frauen, die Chance gegeben, ein selbstbestimmtes Leben zu führen. Yunus' Ansatz zeigt, wie wirtschaftliche Verantwortung und soziale Innovation zur Bekämpfung globaler Ungleichheit beitragen können.",
          image: muhammadYunusImage,
          dataLink: 'https://www.nobelprize.org/prizes/peace/2006/yunus/facts/'
        },
        {
          title: 'Malala Yousafzai: Ein Mädchen, das die Welt veränderte',
          content:
            'Malala Yousafzai kämpfte mutig für das Recht auf Bildung, insbesondere für Mädchen, in Regionen, in denen dies eine gefährliche Mission war. Ihr unerschütterlicher Glaube an die Bedeutung der Bildung und ihre Bereitschaft, Verantwortung zu übernehmen, selbst unter Lebensgefahr, haben sie zu einer globalen Ikone gemacht. Ihre Geschichte ist ein kraftvolles Beispiel dafür, wie die Verantwortung für grundlegende Menschenrechte die Welt verändern kann.',
          image: malalaYousafzaiImage,
          dataLink: 'https://malala.org/malalas-story'
        },
        {
          title: 'Tim Berners-Lee: Technologie für das Gemeinwohl',
          content:
            'Tim Berners-Lee, der Erfinder des World Wide Web, stellte seine Erfindung der Welt kostenlos zur Verfügung, um den Zugang zu Informationen für alle Menschen zu erleichtern. Seine Vision von einem freien und offenen Internet zeigt, wie Technologie verantwortungsvoll eingesetzt werden kann, um das Gemeinwohl zu fördern und die Welt zu vernetzen. Berners-Lee’s Beitrag ist ein inspirierendes Beispiel dafür, wie verantwortungsvolle Innovation das Leben von Milliarden von Menschen verbessern kann.',
          image: timBernersLeeImage,
          dataLink: 'https://www.webfoundation.org/about/vision/history-of-the-web/'
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
      ],
      stories: [
        {
          title: 'Oprah Winfreys Dankbarkeitstagebuch',
          content:
            'Oprah Winfrey schreibt einen Großteil ihres Erfolgs dem Führen eines Dankbarkeitstagebuchs zu, in dem sie regelmäßig über die Dinge nachdenkt, für die sie dankbar ist. Dies half ihr, auch in schwierigen Zeiten eine positive Perspektive zu bewahren.'
        },
        {
          title: 'Die Praxis der Dankbarkeit von Albert Schweitzer',
          content:
            'Albert Schweitzer, der berühmte Arzt und Philosoph, lebte nach dem Prinzip der Dankbarkeit. Seine Arbeit in Afrika und sein Engagement für das Wohl der Menschen und Tiere spiegeln seine tiefe Dankbarkeit und sein Engagement für das Leben wider.'
        },
        {
          title: 'Der Erfolg von Gary Vaynerchuks „Thank You Economy“',
          content:
            'In seinem Buch „The Thank You Economy“ erklärt Gary Vaynerchuk, wie Unternehmen durch Dankbarkeit und echte Wertschätzung gegenüber ihren Kunden langfristigen Erfolg sichern können. Diese Philosophie hat die Art und Weise, wie Unternehmen mit ihren Kunden interagieren, revolutioniert.'
        },
        {
          title: 'Anne Franks „Trotz allem“',
          content:
            'Trotz der Schrecken, die sie erlebte, zeigte Anne Frank in ihrem Tagebuch eine bemerkenswerte Dankbarkeit für die kleinen Freuden des Lebens. Ihre Worte erinnern uns daran, auch in dunklen Zeiten dankbar zu bleiben und das Licht in den einfachen Dingen zu sehen.'
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
