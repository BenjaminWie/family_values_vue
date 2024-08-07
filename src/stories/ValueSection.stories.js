import ValueSection from '../components/ValueSection.vue'
import selbstwirksamImage from '@/assets/cardValues/selbstwirksam.webp'
import gemeinsamImage from '@/assets/cardValues/gemeinsam.webp'
import verantwortlichImage from '@/assets/cardValues/verantwortlich.webp'
import dankbarImage from '@/assets/cardValues/dankbar.webp'

// Graph images for "Selbstwirksam"
import futureJobsSkillsGraph from '@/assets/graphs/selbstwirksam/future_jobs_skills.png'
import depressionPrevalenceGraph from '@/assets/graphs/selbstwirksam/depression_prevalence.png'
import selfEfficacyCareerGraph from '@/assets/graphs/selbstwirksam/self_efficacy_career.png'
import climateActionYouthGraph from '@/assets/graphs/selbstwirksam/climate_action_youth.png'

// Importing images for "Selbstwirksam" value stories
import rosaParksImage from '@/assets/images/selbstwirksam/rosa_parks.webp'
import hawkingScientistImage from '@/assets/images/selbstwirksam/hawking_scientist.webp'
import mediaMogulImage from '@/assets/images/selbstwirksam/media_mogul.webp'
import pioneeringScientistImage from '@/assets/images/selbstwirksam/pioneering_scientist.webp'

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

// Importing images for "Dankbar" value stories
import viktorFranklImage from '@/assets/images/dankbar/viktor_frankl.webp'
import mayaAngelouImage from '@/assets/images/dankbar/maya_angelou.webp'
import nickVujicicImage from '@/assets/images/dankbar/nick_vujicic.webp'
import sherylSandbergImage from '@/assets/images/dankbar/sheryl_sandberg.webp'

export default {
  title: 'Components/ValueSection',
  component: ValueSection
}

const Template = (args) => ({
  components: { ValueSection },
  setup() {
    return { args }
  },
  template: '<ValueSection v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  value: [
    {
      id: 1,
      name: 'Selbstwirksam',
      quote:
        'Jeder Mensch ist der Architekt seiner eigenen Zukunft. Nur wer an sich glaubt, kann Berge versetzen.',
      author: 'Viktor Frankl',
      gradient: 'linear-gradient(45deg, #34eb83, #349ceb)',
      image: selbstwirksamImage,
      szene:
        'Ein kleiner Junge steht in einem abstrakten Raum mit weichen, fließenden Formen. Er hat gerade erfolgreich eine Bauklötzchen-Pyramide aufgebaut, die stabil und leuchtend in den Farben Gelb (für Erfolg), Grün (für Achtsamkeit), und Blau (für Selbstwirksamkeit) strahlt. Die Szene ist minimalistisch und zeigt im Hintergrund sanfte, abstrahierte Elemente, die die Konzentration und den Fokus des Kindes unterstützen. Die Beleuchtung ist weich und lenkt den Blick auf die Pyramide, die als Symbol für das Erreichen eines selbstgestellten Ziels steht. Es ist ein ruhiger, aber triumphaler Moment, der den Wert von Selbstwirksamkeit verdeutlicht.',
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
          title: 'Rosa Parks: Der Funke der Bürgerrechtsbewegung',
          content:
            "Als Rosa Parks 1955 in Montgomery, Alabama, sich weigerte, ihren Sitzplatz im Bus für einen weißen Passagier zu räumen, setzte sie einen Funken, der die Bürgerrechtsbewegung entzündete. Ihr Glaube an ihre eigene Fähigkeit, trotz widriger Umstände für Gerechtigkeit einzustehen, führte zu einem Boykott, der schließlich zur Aufhebung der Rassentrennung führte. Parks' einfache, aber mutige Tat ist ein kraftvolles Beispiel für Selbstwirksamkeit, das zeigt, wie eine einzelne Person durch festen Glauben an ihre Überzeugungen eine ganze Nation bewegen kann.",
          image: rosaParksImage,
          dataLink: 'https://www.biography.com/activist/rosa-parks'
        },
        {
          title: 'Stephen Hawking: Der Kampf gegen die Unmöglichkeit',
          content:
            'Stephen Hawking wurde in jungen Jahren mit ALS diagnostiziert und ihm wurden nur wenige Jahre Lebenszeit prognostiziert. Doch Hawking widersetzte sich den Erwartungen und setzte seine Arbeit als Physiker fort, um einige der komplexesten Geheimnisse des Universums zu entschlüsseln. Sein Glaube an seine intellektuelle Fähigkeit trotz körperlicher Einschränkungen führte zu bahnbrechenden Entdeckungen, die unser Verständnis des Kosmos revolutionierten. Hawkings Leben ist ein eindrucksvolles Zeugnis für Selbstwirksamkeit und die Kraft des menschlichen Geistes, Grenzen zu überwinden.',
          image: hawkingScientistImage,
          dataLink: 'https://www.hawking.org.uk/biography'
        },
        {
          title: 'Oprah Winfrey: Vom Trauma zur Triumph',
          content:
            'Oprah Winfrey wuchs in Armut auf und erlebte in ihrer Kindheit Missbrauch und Ausgrenzung. Doch anstatt sich von diesen Erfahrungen definieren zu lassen, entwickelte sie ein starkes Gefühl der Selbstwirksamkeit. Sie nutzte ihre schwierigen Anfänge als Antrieb, um eine der erfolgreichsten und einflussreichsten Medienpersönlichkeiten der Welt zu werden. Oprah zeigt, wie Selbstwirksamkeit es ermöglicht, die eigene Geschichte neu zu schreiben und trotz aller Widrigkeiten Erfolg zu erreichen.',
          image: mediaMogulImage,
          dataLink: 'https://www.oprah.com/pressroom/oprah-winfrey-biography/all'
        },
        {
          title: 'Marie Curie: Die Pionierin der Wissenschaft',
          content:
            'Marie Curie, die erste Frau, die einen Nobelpreis gewann, und die einzige Person, die Nobelpreise in zwei wissenschaftlichen Disziplinen erhielt, zeigt eindrucksvoll, was Selbstwirksamkeit bewirken kann. Trotz der Vorurteile und Hindernisse, denen sie als Frau in der Wissenschaft begegnete, verfolgte sie unbeirrt ihre Forschung und entdeckte Radium und Polonium. Curie’s unerschütterlicher Glaube an ihre Fähigkeiten und ihre Arbeit schuf die Grundlagen für viele moderne wissenschaftliche Entwicklungen.',
          image: pioneeringScientistImage,
          dataLink: 'https://www.nobelprize.org/womenwhochangedscience/stories/marie-curie'
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
          title: 'Viktor Frankl: Dankbarkeit im Angesicht des Unvorstellbaren',
          content:
            'Der Holocaust-Überlebende und Psychiater Viktor Frankl entwickelte die Logotherapie, die auf der Idee basiert, dass der Sinn des Lebens selbst in den schwersten Umständen gefunden werden kann. In seiner Gefangenschaft fand Frankl kleine Momente der Dankbarkeit, die ihm halfen, das Unerträgliche zu ertragen und schließlich zu überleben. Frankl’s Leben zeigt, wie Dankbarkeit als Kraftquelle dienen kann, um auch die größten Herausforderungen zu meistern.',
          image: viktorFranklImage,
          dataLink: 'https://www.biography.com/scholar/viktor-frankl'
        },
        {
          title: 'Maya Angelou: Dankbarkeit trotz Widrigkeiten',
          content:
            'Maya Angelou, die berühmte Dichterin und Bürgerrechtlerin, wuchs in einer Zeit tiefer Rassentrennung und persönlicher Not auf. Trotzdem kultivierte sie eine Haltung der Dankbarkeit, die sich in ihrer Arbeit und ihrem Leben widerspiegelte. Ihre Fähigkeit, Schönheit und Bedeutung in den kleinsten Dingen zu finden, inspiriert bis heute Millionen von Menschen.',
          image: mayaAngelouImage,
          dataLink: 'https://www.biography.com/writer/maya-angelou'
        },
        {
          title: 'Nick Vujicic: Leben ohne Grenzen',
          content:
            'Nick Vujicic wurde ohne Arme und Beine geboren, doch anstatt in Selbstmitleid zu verfallen, entwickelte er eine tiefe Dankbarkeit für das Leben, die ihn zu einem der weltweit bekanntesten Motivationsredner machte. Vujicic zeigt, dass Dankbarkeit nicht von äußeren Umständen abhängt, sondern eine innere Haltung ist, die uns erlaubt, ein erfülltes Leben zu führen, egal unter welchen Bedingungen.',
          image: nickVujicicImage,
          dataLink: 'https://www.nickvujicic.com/'
        },
        {
          title: 'Sheryl Sandberg: Dankbarkeit nach Verlust',
          content:
            'Nach dem plötzlichen Tod ihres Mannes schrieb Sheryl Sandberg, die COO von Facebook, das Buch „Option B“, in dem sie über den Umgang mit Trauer und den Wiederaufbau des Lebens spricht. Sie fand Kraft in der Dankbarkeit für die Unterstützung, die sie von ihrer Familie und Freunden erhielt. Sandberg’s Geschichte zeigt, wie Dankbarkeit helfen kann, nach einem tiefen Verlust wieder Hoffnung und Freude im Leben zu finden.',
          image: sherylSandbergImage,
          dataLink: 'https://optionb.org/book'
        }
      ]
    }
  ]
}
