import TighteningContainer from './tighteningcontainer'

export default function TighteningWordLines() {
    return(
        <section className="flex flex-col gap-4">
            <TighteningContainer 
                title={"01 - Repenser la manière dont nous vivons le numérique"}
                text={"Pendant longtemps, les interfaces numériques ont été conçues comme de simples outils fonctionnels destinés à transmettre une information. Aujourd'hui, elles deviennent de véritables espaces d'exploration où chaque élément participe à raconter une histoire. Les couleurs, les mouvements, les interactions et la typographie ne sont plus de simples choix esthétiques, mais des moyens de créer une connexion émotionnelle avec l'utilisateur. Concevoir une expérience digitale, c'est désormais imaginer un environnement capable d'accompagner, de surprendre et de guider naturellement chaque personne à travers un parcours unique."}
            />

            <TighteningContainer 
                title={"02 - Le mouvement comme nouveau langage du design"}
                text={"L'animation occupe une place de plus en plus importante dans la conception des expériences modernes. Un mouvement bien pensé peut attirer l'attention, donner du sens à une transition ou simplement rendre une interface plus agréable à utiliser. Pourtant, l'objectif n'est pas d'ajouter des effets pour impressionner, mais de créer une véritable cohérence entre le contenu et la manière dont il apparaît. Le mouvement devient alors un langage silencieux qui permet de raconter une histoire, de créer du rythme et de renforcer l'identité d'un projet."}
            />

            <TighteningContainer 
                title={"03 - Imaginer les expériences digitales de demain"}
                text={"Les prochaines générations d'expériences numériques seront probablement définies par une relation encore plus naturelle entre l'humain et la technologie. Les interfaces deviendront plus adaptatives, plus immersives et capables de mieux comprendre les intentions de leurs utilisateurs. Entre intelligence artificielle, nouveaux formats d'affichage et interactions toujours plus créatives, les possibilités semblent infinies. Le véritable défi sera alors de trouver l'équilibre entre innovation technologique et simplicité, afin de créer des expériences qui restent avant tout humaines."}
            />
        </section>
    )
}