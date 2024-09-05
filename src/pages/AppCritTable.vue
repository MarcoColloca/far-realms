<script>
import { store } from '../store';

export default {
    data() {
        return{
            // contenuto del titolo
            title:'Tabelle dei Critici',
            isVisibleNavbar: true,
            damages:  [
                'Reset',
                'Contundenti',
                'Perforanti', 
                'Taglienti', 
                'Fuoco', 
                'Freddo', 
                'Fulmine',
                'Acido',
                'Veleno',
                'Forza',
                'Suono',
                'Radiante',
                'Necrotico',
                'Psichico',
                'Vuoto'
            ],
            
            contundentiMinori: [
                {
                    effetto: 'Cranio Incrinato',
                    descrizione: 'Stordito per 1 round',
                    cura: 'Effetti che rimuovano stordimento',
                    speciale: 'No',
                    selezionato: false,
                },
                {
                    effetto: 'Timpano danneggiato',
                    descrizione: 'Svantaggio ai tiri su percezione che riguardano l\'udito',
                    cura: 'Medicina CD 15 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false,
                },
                {
                    effetto: 'Ossa crepate',
                    descrizione:'All\'inizio di ogni turno Costituzione CD 10 o perdere l\'azione',
                    cura: 'Medicina CD 15 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false,
                },
                {
                    effetto: 'Perdita Oggetto',
                    descrizione:'Fa cadere l\'oggetto impugnato ad 1d4x1.5 metri di distanza',
                    cura: 'Nessuna',
                    speciale: 'No',
                    selezionato: false,
                },
            ],

            contundentiMaggiori: [
                {
                    effetto: 'Spina dorsale spaccata',
                    descrizione: 'Paralizzato permanentemente.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false,
                },
                {
                    effetto: 'Coma',
                    descrizione: 'Incosciente permanente.',
                    cura: 'Ristorare superiore.',
                    speciale: 'No',
                    selezionato: false,
                },
                {
                    effetto: 'Equipaggiamento Frantumato',
                    descrizione:'Perdita del pezzo di equipaggiamento colpito dall\'attacco.',
                    cura: 'Ripararlo con Magie o da un Fabbro',
                    speciale: 'Se l\'oggetto non può essere rotto viene sbalzato via di 1d10x3 metri',
                    selezionato: false,
                },
                {
                    effetto: 'Osso Frantumatoo',
                    descrizione:'Possibile perdita di Arto o altre funzioni motorie.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false,
                },
            ],

            perforantiMinori: [
                {
                    effetto: 'Occhio danneggiato',
                    descrizione: 'Svantaggio ai tiri su percezione che riguardano la vista. Se x2 Accecato',
                    cura: 'Medicina CD 15 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false,
                },
                {
                    effetto: 'Mano Perforata',
                    descrizione: 'Lascia Cadere l\'oggetto, se impugna un\'arma attacca con Svantaggio.',
                    cura: 'Medicina CD 18 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false,
                },
                {
                    effetto: 'Ferita Sanguinante',
                    descrizione:'Subisce 1d4 danni all\'inizio di ogni turno',
                    cura: 'Medicina CD 10.',
                    speciale: 'No',
                    selezionato: false,
                },
                {
                    effetto: 'Orribile Cicatrice',
                    descrizione:'Svantaggio in tutti i tiri di Persuasione, Vantaggio su tutti i tiri di Intimidire.',
                    cura: 'Ristorare inferiore o simili.',
                    speciale: 'No',
                    selezionato: false,
                },
            ],

            perforantiMaggiori: [
                {
                    effetto: 'Occhio perso',
                    descrizione: 'Svantaggio ai tiri su percezione che riguardino la vista. Se x2 Accecato.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false,
                },
                {
                    effetto: 'Polmone Perforato',
                    descrizione: 'Inizia a Soffocare',
                    cura: 'Medicina CD 24 e Riposo o Guarigione.',
                    speciale: 'Medicina CD 12 o Cura Magica bloccano la perdita di sangue per 1 ora',
                    selezionato: false,
                },
                {
                    effetto: 'Ferita sanguinante',
                    descrizione:'Subisce 1d8 danni all\'inizio di ogni turno',
                    cura: 'Medicina CD 15 o Cura Magica.',
                    speciale: 'No',
                    selezionato: false,
                },
                {
                    effetto: 'Tendine reciso',
                    descrizione:'Arto momentaneamente inutilizzabile.',
                    cura: 'Medicina CD 20 per 3 Riposi o Ristorare.',
                    speciale: 'No',
                    selezionato: false,
                },
            ],

            taglientiMinori:[
                {
                    effetto: 'Squarcio su braccio',
                    descrizione: 'Effettua attacchi con quel braccio con svantaggio',
                    cura: 'Medicina CD 17 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Dito tagliato',
                    descrizione: '1 danno ogni round, malus cumulativi se ripetuto.',
                    cura: 'Rigenerazione.',
                    speciale: 'Medicina CD 10 o Cura magica ferma la perdita di sangue',
                    selezionato: false, 
                },
                {
                    effetto: 'Ferita sanguinante',
                    descrizione: 'Subisce 1d4 danni all\'inizio di ogni turno',
                    cura: 'Medicina CD 13 o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Orribile Cicatrice',
                    descrizione: 'Svantaggio in tutti i tiri di Persuasione, Vantaggio su tutti i tiri di Intimidire',
                    cura: 'Ristorare inferiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            taglientiMaggiori:[
                {
                    effetto: 'Ferita sanguinante copiosa',
                    descrizione: 'Subisce 3d4 danni all\'inizio di ogni turno',
                    cura: 'Medicina CD 20 o cura magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Squarcio nello Stomaco',
                    descrizione: 'All\'inizio del turno perde 10 PF e TS Costituzione CD 20 o perde l\'azione',
                    cura: 'Medicina CD 24 e Riposo o Guarigione.',
                    speciale: 'Medicina CD 17 o Cura Magica bloccano la perdita di sangue per 1 ora',
                    selezionato: false, 
                },
                {
                    effetto: 'Arto amputato',
                    descrizione: 'Perdita dell\'arto.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Tendine reciso',
                    descrizione: 'Arto momentaneamente inutilizzabile.',
                    cura: 'Medicina CD 20 per 3 Riposi o Ristorare.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            fuocoMinori:[
                {
                    effetto: 'Prende Fuoco parziale',
                    descrizione: '1d6 danni da fuoco quando inizia il turno',
                    cura: '1 Azione per spegnere le fiamme.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Arti Superiori ustionati',
                    descrizione: 'Svantaggio nei tiri per colpire e prove abilità che richiedono l\'uso delle mani',
                    cura: 'Raffreddare l\'oggetto in questione.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Pelle ustionata',
                    descrizione: 'All\'inizio di ogni turno Costituzione CD 13 o può solo muoversi.',
                    cura: 'Medicina CD 13 o Cura Magica.',
                    speciale: 'Subisce 1 danno ogni round finché indossa armature.',
                    selezionato: false, 
                },
                {
                    effetto: 'Orribile Cicatrice',
                    descrizione: 'Svantaggio in tutti i tiri di Persuasione, Vantaggio su tutti i tiri di Intimidire.',
                    cura: 'Ristorare inferiore o simili.',
                    speciale: 'Subisce 1 danno ogni round finché indossa armature.',
                    selezionato: false, 
                },

            ],

            fuocoMaggiori:[
                {
                    effetto: 'Arto Carbonizzato',
                    descrizione: 'Perdita dell\'arto.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Prende Fuoco del tutto',
                    descrizione: '3d6 danni da fuoco quando inizia il turno',
                    cura: 'All\'inizio del turno può decidere di saltarlo per spegnere le fiamme.',
                    speciale: 'Una fonte d\'acqua o simile ovviamente spegne le fiamme.',
                    selezionato: false, 
                },
                {
                    effetto: 'Dolore insopportabile',
                    descrizione: 'Sviene a terra cadendo in uno stato d\'incoscienza.',
                    cura: 'Cura Magica da almeno 10 PF.',
                    speciale: 'Senza ricevere cure magiche si riprenderà dopo un Riposo Breve.',
                    selezionato: false, 
                },
                {
                    effetto: 'Metallo surriscaldato',
                    descrizione: 'Oggetto indossato o impugnato viene considerato sotto l\'effetto di Riscaldare Metalli per un\'ora.',
                    cura: 'Come per riscaldare il metallo.',
                    speciale: 'Se non possiede nulla in metallo, un oggetto consono verrà bruciato.',
                    selezionato: false, 
                },
            ],

            freddoMinori:[
                {
                    effetto: 'Ossa gelide',
                    descrizione: 'Svantaggio ai tiri di abilità e tiri salvezza che riguardano Destrezza.',
                    cura: 'Medicina CD 18 e Calore o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Braccia infreddolite',
                    descrizione: 'Svantaggio nei tiri per colpire e prove abilità che richiedono l\'uso delle braccia',
                    cura: 'Medicina CD 16 e Calore o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Gambe infreddolite',
                    descrizione: 'Velocità dimezzata.',
                    cura: 'Medicina CD 10 e Calore o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Cervello intorpidito',
                    descrizione: 'Svantaggio alle prove di abilità ed i Tiri Salvezza basati su Intelligenza.',
                    cura: 'Medicina CD 15 e Calore o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            freddoMaggiori:[
                {
                    effetto: 'Imprigionato nel ghiaccio',
                    descrizione: 'Riceve lo status Pietrificato.',
                    cura: 'Ristorare Superiore o simili.',
                    speciale: 'Se viene sciolto con il fuoco tirare un dado per vedere i danni del corpo.',
                    selezionato: false, 
                },
                {
                    effetto: 'Gambe congelate',
                    descrizione: 'Velocità ridotta a Zero.',
                    cura: 'Medicina CD 20 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Dolore insopportabile',
                    descrizione: 'Sviene a terra cadendo in uno stato d\'incoscienza.',
                    cura: 'Cura Magica da almeno 10 PF.',
                    speciale: 'Senza ricevere cure magiche si riprenderà dopo un Riposo Breve.',
                    selezionato: false, 
                },
                {
                    effetto: 'Arto in Cancrena',
                    descrizione: 'Perdita dell\'arto.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            fulmineMinori:[
                {
                    effetto: 'Carico di elettricità',
                    descrizione: 'Subisce 1d6 danni da elettricità ogni volta che viene colpito.',
                    cura: '1 Azione per liberarsi dell\'elettricità.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Retina sovreccitata',
                    descrizione: 'Accecato per 1d4 round.',
                    cura: 'Effetti che rimuovono cecità.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Folgorato',
                    descrizione: 'Stordito per 1 round',
                    cura: 'Effetti che rimuovano stordimento.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Battito molto accelerato',
                    descrizione: 'Agisce sotto effetto di velocità. Ogni fine round Costituzione CD 10 o cade inconscio.',
                    cura: 'Incantesimo Lentezza o ristorare inferiore.',
                    speciale: 'Se Inconscio: Medicina CD 19 o Cura Magica.',
                    selezionato: false, 
                },
            ],

            fulmineMaggiori:[
                {
                    effetto: 'Dolore insopportabile',
                    descrizione: 'Sviene a terra cadendo in uno stato d\'incoscienza.',
                    cura: 'Cura Magica da almeno 10 PF',
                    speciale: 'Senza ricevere cure magiche si riprenderà dopo un Riposo Breve.',
                    selezionato: false, 
                },
                {
                    effetto: 'Coma temporaneo',
                    descrizione: 'Incosciente per 1 giorno',
                    cura: 'Ristorare superiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Elettrizzato',
                    descrizione: 'Paralizzato per un round.',
                    cura: 'Effetti che rimuovono Paralisi.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Stracarico di elettricità',
                    descrizione: 'Subisce 3d6 danni da elettricità ogni volta che viene colpito.',
                    cura: '1 Round per liberarsi dell\'elettricità.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            acidoMinori:[
                {
                    effetto: 'Acido negli occhi',
                    descrizione: 'Accecato per 1d4 round.',
                    cura: 'Effetti che rimuovano cecità.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Pelle parzialmente ustionata dall\'acido',
                    descrizione: 'All\'inizio di ogni turno Costituzione CD 13 o può solo muoversi.',
                    cura: 'Medicina CD 15 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Vulnerabilità indotta',
                    descrizione: 'Vulnerabile ai danni da Acido per 1 minuto.',
                    cura: 'Ristorare inferiore',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Orribile Cicatrice',
                    descrizione: 'Svantaggio in tutti i tiri di Persuasione, Vantaggio su tutti i tiri di Intimidire. ',
                    cura: 'Ristorare inferiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            acidoMaggiori:[
                {
                    effetto: 'Dolore insopportabile',
                    descrizione: 'Sviene a terra cadendo in uno stato d\'incoscienza.',
                    cura: 'Cura Magica da almeno 10 PF.',
                    speciale: 'Senza ricevere cure magiche si riprenderà dopo un Riposo Breve.',
                    selezionato: false, 
                },
                {
                    effetto: 'Pelle completamente ustionata dall\'acido',
                    descrizione: 'All\'inizio di ogni turno Costituzione CD 20 o può solo muoversi.',
                    cura: 'Medicina CD 20 e Riposo Lungo o Ristorare Superiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Occhi danneggiati',
                    descrizione: 'Cecità permanente.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Equipaggiamento Dissolto',
                    descrizione: 'Perdita del pezzo di equipaggiamento colpito dall\'acido.',
                    cura: 'Se possibile ripararlo da un fabbro.',
                    speciale: 'Equipaggiamenti magici potrebbero venir danneggiati anziché dissolti.',
                    selezionato: false, 
                },
            ],

            velenoMinori:[
                {
                    effetto: 'Vulnerabilità indotta',
                    descrizione: 'Vulnerabile ai danni da Veleno e Svantaggio ai TS contro i veleni per 1 minuto.',
                    cura: 'Antitossina o Ristorare inferiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Sistema Immunitario Indebolito',
                    descrizione: 'Svantaggio ai tiri di abilità e tiri salvezza su Costituzione per 1 giorno.',
                    cura: 'Antitossina o Ristorare inferiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Veleno in circolo',
                    descrizione: 'Subisce 1d4 danni all\'inizio di ogni turno.',
                    cura: 'Antitossina o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Reazione allergica',
                    descrizione: 'Avvelenato permanentemente.',
                    cura: 'Antitossina o effetti che rimuovano lo status.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            velenoMaggiori:[
                {
                    effetto: 'Sistemi interni danneggiati',
                    descrizione: 'Acquisisce un livello di esaurimento.',
                    cura: 'Riposo Lungo o Ristorare Superiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Tessuto cutaneo rovinato',
                    descrizione: 'Svantaggio ai tiri di abilità e tiri salvezza su Carisma.',
                    cura: 'Antitossina o Ristorare Superiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Sistema Immunitario danneggiato',
                    descrizione: 'Svantaggio ai tiri di abilità e tiri salvezza su Costituzione.',
                    cura: 'Antitossina o Ristorare Superiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Veleno in circolo',
                    descrizione: 'Subisce 3d4 danni all\'inizio di ogni turno.',
                    cura: 'Antitossina o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            forzaMinori:[
                {
                    effetto: 'Perdita di Equilibrio',
                    descrizione: 'Cade Prono a terra.',
                    cura: 'Alzarsi.',
                    speciale: 'No.',
                    selezionato: false, 
                },
                {
                    effetto: 'Distaccamento della Trama Minore',
                    descrizione: '25% di probabilità di fallire nell\'utilizzare incantesimi o capacità magiche.',
                    cura: 'Ristorare Superiore o Simili.',
                    speciale: 'Ristorare inferiore permette di ignorare l\'effetto per 1 giorno.',
                    selezionato: false, 
                },
                {
                    effetto: 'Vulnerabilità indotta',
                    descrizione: 'Vulnerabile ai danni da Forza per 1 minuto.',
                    cura: 'Ristorare inferiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Sensibilità alla Magia',
                    descrizione: 'Svantaggio ai TS contro incantesimi e capacità Magiche per un minuto.',
                    cura: 'Ristorare inferiore',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            forzaMaggiori:[
                {
                    effetto: 'Ipersensibilità alla Magia',
                    descrizione: 'Svantaggio permanente ai TS contro incantesimi e capacità Magiche.',
                    cura: 'Ristorare Superiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Distaccamento della Trama',
                    descrizione: 'Incapace di lanciare incantesimi o utilizzare capacità magiche.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Vulnerabilità permanente',
                    descrizione: 'Vulnerabile ai danni da Forza.',
                    cura: 'Ristorare Superiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Sovraccarico Sensoriale',
                    descrizione: 'Finisce prono a terra privo di coscienza.',
                    cura: 'Cura Magica da almeno 10 PF.',
                    speciale: 'Senza ricevere cure magiche si riprenderà dopo un Riposo Breve.',
                    selezionato: false, 
                },
            ],

            suonoMinori:[
                {
                    effetto: 'Fischio alle orecchie',
                    descrizione: 'Svantaggio ai tiri su percezione che riguardano l\'udito.',
                    cura: 'Medicina CD 10 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Perdita di Equilibrio',
                    descrizione: 'Cade Prono a Terra.',
                    cura: 'Nessuna.',
                    speciale: 'Nel caso sia già parte dell\'effetto base, aumentare la distanza.',
                    selezionato: false, 
                },
                {
                    effetto: 'Timpano danneggiato',
                    descrizione: 'Sordo per 1d4 round.',
                    cura: 'Effetti che rimuovano sordità.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Equilibrio precario',
                    descrizione: 'Svantaggio ai tiri di abilità e tiri salvezza su Destrezza per 1 giorno.',
                    cura: 'Medicina CD 13 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            suonoMaggiori:[
                {
                    effetto: 'Oggetti Frantumati',
                    descrizione: 'Qualunque oggetto di vetro o simile portato dal personaggio finisce in frantumi.',
                    cura: 'Nessuna.',
                    speciale: 'Gli oggetti riposti in sacche dimensionali sono protetti da quest\'effetto.',
                    selezionato: false, 
                },
                {
                    effetto: 'Fischio persistente',
                    descrizione: 'Fallisce automaticamente qualunque tiro di percezione che si basi sull\'udito',
                    cura: 'Ristorare superiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Instabilità Motoria',
                    descrizione: 'Fallisce automaticamente prove di abilità e TS su Destrezza.',
                    cura: 'Ristorare superiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Timpano distrutto',
                    descrizione: 'Sordo permanentemente.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            radianteMinori:[
                {
                    effetto: 'Vulnerabilità indotta',
                    descrizione: 'Vulnerabile ai danni Radianti per 1 minuto.',
                    cura: 'Ristorare inferiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Prende Fuoco',
                    descrizione: '1d6 danni da fuoco quando inizia il turno.',
                    cura: '1 Azione per spegnere le fiamme.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Retina sovreccitata',
                    descrizione: 'Accecato per 1d4 round.',
                    cura: 'Effetti che rimuovono cecità.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Pelle ustionata',
                    descrizione: 'All\'inizio di ogni turno Costituzione CD 13 o può solo muoversi.',
                    cura: 'Medicina CD 13 e Riposo o Cura Magica.',
                    speciale: 'Subisce 1 danno ogni round finché indossa armature.',
                    selezionato: false, 
                },
            ],

            radianteMaggiori:[
                {
                    effetto: 'Sovraccarico Energia Positiva',
                    descrizione: 'Non può rigenerare le proprie ferite tramite effetti di cura magica.',
                    cura: 'Ristorare inferiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Retina bruciata',
                    descrizione: 'Cecità permanente.',
                    cura: 'Effetti che rimuovano cecità.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Arto disintegrato',
                    descrizione: 'Perdita dell\'arto.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Equipaggiamento Sciolto',
                    descrizione: 'Perdita del pezzo di equipaggiamento colpito dal calore dell\'energia radiosa.',
                    cura: 'Se possibile ripararlo da un fabbro.',
                    speciale: 'Equipaggiamenti magici potrebbero venir danneggiati anziché sciolti.',
                    selezionato: false, 
                },
            ],

            necroticoMinori:[
                {
                    effetto: 'Risucchio Vitale',
                    descrizione: 'Acquisisce un livello di affaticamento.',
                    cura: 'Riposo Lungo.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Atrofia lieve',
                    descrizione: 'Effettua attacchi con quel braccio con svantaggio o Velocità Dimezzata.',
                    cura: 'Medicina CD 21 e Riposo o Cura Magica.',
                    speciale: 'Tirare 1d4 per determinare l\'arto',
                    selezionato: false, 
                },
                {
                    effetto: 'Vulnerabilità indotta',
                    descrizione: 'Vulnerabile ai danni Necrotici per 1 minuto.',
                    cura: 'Ristorare inferiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Anima indebolita',
                    descrizione: 'Svantaggio a tutti i TS su Carisma, Intelligenza e Saggezza per 1 minuto.',
                    cura: 'Calmare Emozioni sopprime l\'effetto.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            necroticoMaggiori:[
                {
                    effetto: 'Anima Lacerata',
                    descrizione: 'Svantaggio a Prove Abilità, Check e TS su Intelligenza, Saggezza e Carisma.',
                    cura: 'Ristorare Superiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Invecchiamento del Corpo',
                    descrizione: 'Svantaggio a Prove Abilità, Check e TS su Forza, Destrezza e Costituzione.',
                    cura: 'Ristorare Superiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Risucchio Vitale',
                    descrizione: 'I danni diventano danni ai Punti Ferita Massimi.',
                    cura: 'Ristorare Superiore o 1d4 Riposi Lunghi.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Atrofia avanzata',
                    descrizione: 'Perdita dell\'arto.',
                    cura: 'Rigenerazione o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            psichicoMinori:[
                {
                    effetto: 'Sovraccarico cerebrale',
                    descrizione: 'Stordito per 1 round.',
                    cura: 'Effetti che rimuovano lo stordimento.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Mal di testa persistente',
                    descrizione: 'All\'inizio di ogni turno Costituzione CD 11 o perdere l\'azione.',
                    cura: 'Medicina CD 13 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Demenza momentanea',
                    descrizione: 'Svantaggio ai tiri di abilità e tiri salvezza che riguardano caratteristiche mentali.',
                    cura: 'Riposo Lungo o Ristorare inferiore.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Vertigini',
                    descrizione: 'Confuso per 1d4 round.',
                    cura: 'Effetti che rimuovano confusione.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            psichicoMaggiori:[
                {
                    effetto: 'Emicrania lancinante',
                    descrizione: 'All\'inizio di ogni turno Costituzione CD 18 o può solo muoversi.',
                    cura: 'Medicina CD 19 e Riposo o Cura Magica.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Allucinazioni',
                    descrizione: 'Confuso permanentemente.',
                    cura: 'Ristorare Superiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Demenza Permanente',
                    descrizione: 'Svantaggio ai tiri di abilità e tiri salvezza che riguardano caratteristiche mentali.',
                    cura: 'Ristorare Superiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Coma permanente',
                    descrizione: 'Incosciente permanentemente.',
                    cura: 'Ristorare Superiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],

            vuotoMinori:[
                {
                    effetto: 'Coscienza Debilitata',
                    descrizione: 'La creatura agisce sotto l\'effetto di confusione per 1 ora.',
                    cura: 'Ristorare o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Aura Disturbata',
                    descrizione: 'La creatura effettua qualunque Azione che richieda un tiro di d20 con Svantaggio. E non può ottenre Vantaggio in alcun modo.',
                    cura: 'Ristorare Superiore o Simili.',
                    speciale: 'Ristorare, sopprime l\'effetto fino al prossimo Riposo Lungo.',
                    selezionato: false, 
                },
                {
                    effetto: 'Distaccamento Parziale dall\'Omnis',
                    descrizione: 'La creatura recupera Punti Ferita dimezzati da qualunque fonte.',
                    cura: 'Ristorare o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Anima Instabile',
                    descrizione: 'La creatura muore se arriva a 0 Punti Ferita',
                    cura: 'Rimosso da Ristorare Superiore o simili.',
                    speciale: 'Una creatura morta in questo stato può tornare in vita solo tramite Desiderio, Resurrezione Pura o simili.',
                    selezionato: false, 
                },
            ],

            vuotoMaggiori:[
                {
                    effetto: 'Anima Precaria',
                    descrizione: 'La creatura muore se arriva a 0 Punti Ferita',
                    cura: 'Rimosso da Ristorare Superiore Lanciato come incantesimo di 9° livello o simili.',
                    speciale: 'Una creatura morta in questo stato può tornare in vita solo da una Divinità Maggiore.',
                    selezionato: false,                    
                },
                {
                    effetto: 'Coscienza Devastata',
                    descrizione: 'La creatura agisce sempre sotto l\'effetto di confusione.',
                    cura: 'Ristorare Superiore o simili.',
                    speciale: 'No',
                    selezionato: false, 
                },
                {
                    effetto: 'Aura Devastata',
                    descrizione: 'La creatura perde qualunque capacità e qualunque bonus derivanti da QUALUNQUE fonte: Classe, Razza, Background, etc.',
                    cura: 'Rimosso tramite Desiderio o simili.',
                    speciale: 'Qualunque prova di Abilità o Caratteristica verrà effettuata utilizzando il d20 e la Caratteristica adeguata.',
                    selezionato: false, 
                },
                {
                    effetto: 'Distaccamento Totale dall\'Omnis',
                    descrizione: 'La creatura non può recuperare i Punti Ferita persi in alcun modo.',
                    cura: 'Ristorare Superiore o simili',
                    speciale: 'No',
                    selezionato: false, 
                },
            ],
        }
    },


    computed:{

    },


    methods:{

        getRandomIntInclusive(min, max) {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
        },

        reset(){
            for(let i = 0; i < this.contundentiMinori.length; i++){
                this.contundentiMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.contundentiMaggiori.length; i++){
                this.contundentiMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.perforantiMinori.length; i++){
                this.perforantiMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.perforantiMaggiori.length; i++){
                this.perforantiMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.taglientiMinori.length; i++){
                this.taglientiMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.taglientiMaggiori.length; i++){
                this.taglientiMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.fuocoMinori.length; i++){
                this.fuocoMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.fuocoMaggiori.length; i++){
                this.fuocoMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.fuocoMaggiori.length; i++){
                this.fuocoMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.freddoMinori.length; i++){
                this.freddoMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.freddoMaggiori.length; i++){
                this.freddoMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.fulmineMinori.length; i++){
                this.fulmineMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.fulmineMaggiori.length; i++){
                this.fulmineMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.acidoMinori.length; i++){
                this.acidoMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.acidoMaggiori.length; i++){
                this.acidoMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.velenoMinori.length; i++){
                this.velenoMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.velenoMaggiori.length; i++){
                this.velenoMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.forzaMinori.length; i++){
                this.forzaMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.forzaMaggiori.length; i++){
                this.forzaMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.suonoMinori.length; i++){
                this.suonoMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.suonoMaggiori.length; i++){
                this.suonoMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.radianteMinori.length; i++){
                this.radianteMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.radianteMaggiori.length; i++){
                this.radianteMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.necroticoMinori.length; i++){
                this.necroticoMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.necroticoMaggiori.length; i++){
                this.necroticoMaggiori[i].selezionato = false;
            }

            for(let i = 0; i < this.psichicoMinori.length; i++){
                this.psichicoMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.psichicoMaggiori.length; i++){
                this.psichicoMaggiori[i].selezionato = false;
            }
            
            for(let i = 0; i < this.vuotoMinori.length; i++){
                this.vuotoMinori[i].selezionato = false;
            }

            for(let i = 0; i < this.vuotoMaggiori.length; i++){
                this.vuotoMaggiori[i].selezionato = false;
            }
        },


        getDescription(array)
        {
            for(let i = 0; i < array.length; i++){
                if(array[i].selezionato === true){
                    return  array[i].descrizione
                }
            }
        },


        getRemedy(array)
        {
            for(let i = 0; i < array.length; i++){
                if(array[i].selezionato === true){
                    return  array[i].cura
                }
            }
        },


        getSpecial(array)
        {
            for(let i = 0; i < array.length; i++){
                if(array[i].selezionato === true){
                    return  array[i].speciale
                }
            }
        },

        findEffect(array)
        {
            for(let i = 0; i < array.length; i++){
                array[i].selezionato = false;
            }

            const number = this.getRandomIntInclusive(0, array.length)
            
            for(let i = 0; i < array.length; i++){
                
                if(i === number){
                    return array[i].selezionato = true;
                }
            }    
            
        },

        isSelected(object)
        {
            if(object.selezionato === true){
                return 'selected'
            }
        },

        nameIntoId(name)
        {
            return `#${name}`
        },

        hideNavbar()
        {
            this.isVisibleNavbar = false;
        },

        showNavbar()
        {
            this.isVisibleNavbar = true;
        }
    }

}
</script>


<template>
    
<div class="crit-section">
    <h1 class="text-center text-light glow-text-purple my-5">Tabelle dei Critici</h1>

    <div class="container text-light crit-section__description d-none d-md-block">        
        <span class="text-start fs-5">
            Questa sezione è stata creata perchè io ed i miei amici abbiamo sempre trovato i Critici della 5e "noiosi". <br>
            Spesso capita che, se non appartieni alla giusta classe, il tuo danno critico può essere inferiore ad un 
            danno normale, il che rovina completamente l'euforia di aver messo a segno un colpo critico. <br>
            C'è da precisare che noi abbiamo giocato per molto tempo in 3.5, dove il critico poteva essere parte integrante
            di alcune build, si poteva potenziare tramite talenti e privilegi di Classi di Prestigio, ma anche per chi non prendeva
            queste strade, risultava comunque molto più impattante rispetto al critico della 5e. <br> 
            Insomma, al nostro tavolo, volevamo evitare il: <br> 
        </span>
        <div class="text-warning text-center fs-5">
            "Finalmente! Un critico!" <br>
            "Bene tira i danni." <br>
            "Perfetto ora tiro, 2d8, aggiungo 4.. ho fatto 7 danni..." <br>
            "Ah! Tanto per cambiare, senza critico hai fatto 10 danni ora 7, che fortuna!" <br>
        </div>
        <span class="text-start fs-5">
            Ecco, per evitare queste situazioni, abbiamo deciso di dare una svolta extra ai colpi critici, suddividendo le possibili
            conseguenze in base ad alcuni fattori: <br>
            <ul>
                <li class="fs-5">
                    <strong class="text-primary">Tipologia di danno inflitto:</strong> Semplicemente la fonte di danno che viene inflitto, 
                    con alcuni elementi extra, presenti nelle nostre campagne. 
                </li>
                <li class="fs-5">
                    <strong class="text-primary">Entità del danno ricevuto:</strong> Può variare tra effetti Minori o Maggiori in base alla quantità di danno, 
                    ma può dipendere anche dalla differenza di taglia tra le creature.
                </li>
                <li class="fs-5">
                    <strong class="text-primary">Tiri Salvezza:</strong> Nel nostro tavolo non consideriamo il 20 e l'1 nei Tiri Salvezza come rispettivamente 
                    "Sempre Superato" o "Sempre Fallito". Tuttavia, qualora una creatura o un giocatore, dovesse fallire un TS tirando 1 sul dado, in quel caso 
                    verrà effettuato un roll sulla tabella degli effetti critici, questo crea un maggiore impatto per gli incantesimi ad'area, che nonostante
                    colpiscano molte creature, spesso a livelli alti/epici risultano comunque essere poco efficaci.
                </li>
                <li class="fs-5">
                    <strong class="text-primary">Vale per tutti:</strong> Ovviamente è una regola che vale sia per i giocatori, sia per i "mostri". Questo
                    rende gli scontri molto più pericolosi, in quanto, generalmente i mostri effettuano più attacchi rispetto ai giocatori, di conseguenza
                    hanno una percentuale di critico più elevata.
                </li>
            </ul>
        </span>
    </div>
    <div class="lista-danni" v-if="isVisibleNavbar">
        <h4 class="position-absolute" @click="hideNavbar">X</h4>
        <h2>
            Navbar
        </h2>
        <ul>
            <li v-for="(damage, i) in this.damages"> <a :href="nameIntoId(damage)">{{damage}}</a></li>
        </ul>
    </div>
    <div class="text-white mostra-lista-danni" @click="showNavbar" v-if="!isVisibleNavbar">
        <span>
            <font-awesome-icon :icon="['fas', 'rectangle-list']" style="color: #6e06f7;" />
        </span>
    </div>
    
    <div class="container my-container reset" id="Reset">
        <button class="btn btn-outline-purple" @click="reset()">RESET</button>
    </div>
    
    <div class="container my-container tabs-section row">
        <!-- Danni Contundenti Minori-->
        <div class="col-12 col-md-6">
            <span id="Contundenti"></span>
            <div class="my-card">
                <div class="my-card-header contundenti">
                    <h2>Contundenti Minori</h2>
                    <button @click="findEffect(this.contundentiMinori)" class="button-light">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in contundentiMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(contundentiMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(contundentiMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(contundentiMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Contundenti Maggiori-->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header contundenti">
                    <h2>Contundenti Maggiori</h2>
                    <button @click="findEffect(this.contundentiMaggiori)" class="button-light">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in contundentiMaggiori" class="effect"
                            :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(contundentiMaggiori)}}
                    </p>
                </div>
    
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(contundentiMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(contundentiMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Perforanti Minori -->
        <div class="col-12 col-md-6">
            <span id="Perforanti"></span>
            <div class="my-card">
                <div class="my-card-header perforanti">
                    <h2>Perforanti Minori</h2>
                    <button @click="findEffect(this.perforantiMinori)" class="button-light">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in perforantiMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(perforantiMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(perforantiMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(perforantiMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Perforanti Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header perforanti">
                    <h2>Perforanti Maggiori</h2>
                    <button @click="findEffect(this.perforantiMaggiori)" class="button-light">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in perforantiMaggiori" class="effect"
                            :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(perforantiMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(perforantiMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(perforantiMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Taglienti Minori -->
        <div class="col-12 col-md-6">
            <span id="Taglienti"></span>
            <div class="my-card">
                <div class="my-card-header taglienti">
                    <h2>Taglienti Minori</h2>
                    <button @click="findEffect(this.taglientiMinori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in taglientiMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(taglientiMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(taglientiMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(taglientiMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Taglienti Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header taglienti">
                    <h2>Taglienti Maggiori</h2>
                    <button @click="findEffect(this.taglientiMaggiori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in taglientiMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(taglientiMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(taglientiMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(taglientiMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Fuoco Minori -->
        <div class="col-12 col-md-6">
            <span id="Fuoco"></span>
            <div class="my-card">
                <div class="my-card-header fuoco">
                    <h2>Fuoco Minori</h2>
                    <button @click="findEffect(this.fuocoMinori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in fuocoMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(fuocoMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(fuocoMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(fuocoMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Fuoco Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header fuoco">
                    <h2>Fuoco Maggiori</h2>
                    <button @click="findEffect(this.fuocoMaggiori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in fuocoMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(fuocoMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(fuocoMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(fuocoMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Freddo Minori -->
        <div class="col-12 col-md-6">
            <span id="Freddo"></span>
            <div class="my-card">
                <div class="my-card-header freddo">
                    <h2>Freddo Minori</h2>
                    <button @click="findEffect(this.freddoMinori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in freddoMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(freddoMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(freddoMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(freddoMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
        <!-- Danni Freddo Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header freddo">
                    <h2>Freddo Maggiori</h2>
                    <button @click="findEffect(this.freddoMaggiori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in freddoMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(freddoMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(freddoMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(freddoMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Fulmine Minori -->
        <div class="col-12 col-md-6">
            <span id="Fulmine"></span>
            <div class="my-card">
                <div class="my-card-header fulmine">
                    <h2>Fulmine Minori</h2>
                    <button @click="findEffect(this.fulmineMinori)" class="button-light">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in fulmineMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(fulmineMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(fulmineMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(fulmineMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Fulmine Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header fulmine">
                    <h2>Fulmine Maggiori</h2>
                    <button @click="findEffect(this.fulmineMaggiori)" class="button-light">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in fulmineMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(fulmineMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(fulmineMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(fulmineMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
        <!-- Danni Acido Minori -->
        <div class="col-12 col-md-6">
            <span id="Acido"></span>
            <div class="my-card">
                <div class="my-card-header acido">
                    <h2>Acido Minori</h2>
                    <button @click="findEffect(this.acidoMinori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in acidoMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(acidoMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(acidoMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(acidoMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Acido Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header acido">
                    <h2>Acido Maggiori</h2>
                    <button @click="findEffect(this.acidoMaggiori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in acidoMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(acidoMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(acidoMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(acidoMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
        <!-- Danni Veleno Minori -->
        <div class="col-12 col-md-6">
            <span id="Veleno"></span>
            <div class="my-card">
                <div class="my-card-header veleno">
                    <h2>Veleno Minori</h2>
                    <button @click="findEffect(this.velenoMinori)" class="button-light">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in velenoMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(velenoMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(velenoMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(velenoMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Veleno Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header veleno">
                    <h2>Veleno Maggiori</h2>
                    <button @click="findEffect(this.velenoMaggiori)" class="button-light">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in velenoMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(velenoMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(velenoMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(velenoMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Forza Minori -->
        <div class="col-12 col-md-6">
            <span id="Forza"></span>
            <div class="my-card">
                <div class="my-card-header forza">
                    <h2>Forza Minori</h2>
                    <button @click="findEffect(this.forzaMinori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in forzaMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(forzaMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(forzaMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(forzaMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Forza Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header forza">
                    <h2>Forza Maggiori</h2>
                    <button @click="findEffect(this.forzaMaggiori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in forzaMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(forzaMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(forzaMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(forzaMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
        <!-- Danni Suono Minori -->
        <div class="col-12 col-md-6">
            <span id="Suono"></span>
            <div class="my-card">
                <div class="my-card-header suono">
                    <h2>Suono Minori</h2>
                    <button @click="findEffect(this.suonoMinori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in suonoMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(suonoMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(suonoMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(suonoMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Suono Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header suono">
                    <h2>Suono Maggiori</h2>
                    <button @click="findEffect(this.suonoMaggiori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in suonoMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(suonoMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(suonoMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(suonoMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
        <!-- Danni Radiante Minori -->
        <div class="col-12 col-md-6">
            <span id="Radiante"></span>
            <div class="my-card">
                <div class="my-card-header radiante">
                    <h2>Radiante Minori</h2>
                    <button @click="findEffect(this.radianteMinori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in radianteMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(radianteMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(radianteMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(radianteMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Radiante Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header radiante">
                    <h2>Radiante Maggiori</h2>
                    <button @click="findEffect(this.radianteMaggiori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in radianteMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(radianteMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(radianteMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(radianteMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
        <!-- Danni Necrotico Minori -->
        <div class="col-12 col-md-6">
            <span id="Necrotico"></span>
            <div class="my-card">
                <div class="my-card-header necrotico">
                    <h2>Necrotico Minori</h2>
                    <button @click="findEffect(this.necroticoMinori)" class="button-light">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in necroticoMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(necroticoMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(necroticoMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(necroticoMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Necrotico Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header necrotico">
                    <h2>Necrotico Maggiori</h2>
                    <button @click="findEffect(this.necroticoMaggiori)" class="button-light">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in necroticoMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(necroticoMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(necroticoMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(necroticoMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
        <!-- Danni Psichico Minori -->
        <div class="col-12 col-md-6">
            <span id="Psichico"></span>
            <div class="my-card">
                <div class="my-card-header psichico">
                    <h2>Psichico Minori</h2>
                    <button @click="findEffect(this.psichicoMinori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in psichicoMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(psichicoMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(psichicoMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(psichicoMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
    
        <!-- Danni Psichico Maggiori -->
        <div class="col-12 col-md-6">
            <div class="my-card">
                <div class="my-card-header psichico">
                    <h2>Psichico Maggiori</h2>
                    <button @click="findEffect(this.psichicoMaggiori)" class="button-dark">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in psichicoMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(psichicoMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(psichicoMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(psichicoMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    
        <!-- Danni Vuoto Minori -->
        <div class="col-12 col-md-6">
            <span id="Vuoto"></span>
            <div class="my-card">
                <div class="my-card-header vuoto">
                    <h2>Vuoto Minori</h2>
                    <button @click="findEffect(this.vuotoMinori)" class="button-void">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in vuotoMinori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(vuotoMinori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(vuotoMinori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(vuotoMinori)}}
                    </p>
                </div>
            </div>
        </div>
    
        <!-- Danni Vuoto Maggiori -->
        <div class="col-12 col-md-6">
            <span id="Vuoto"></span>
            <div class="my-card">
                <div class="my-card-header vuoto">
                    <h2>Vuoto Maggiori</h2>
                    <button @click="findEffect(this.vuotoMaggiori)" class="button-void">
                        Crit!
                    </button>
                </div>
                <div class="my-card-body">
                    <ul>
                        <li v-for="(object, i) in vuotoMaggiori" class="effect" :class="isSelected(object)">
                            {{object.effetto}}
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="after">
                <div class="effetto">
                    <p>
                        Effetto:
                    </p>
    
                    <p class="no-margin">
                        {{getDescription(vuotoMaggiori)}}
                    </p>
                </div>
    
                <div class="speciale">
                    <p>
                        Speciale:
                    </p>
                    <p>
                        {{getSpecial(vuotoMaggiori)}}
                    </p>
                </div>
    
    
                <div class="cura">
    
                    <p>
                        Cura:
                    </p>
    
                    <p class="no-margin">
                        {{getRemedy(vuotoMaggiori)}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


</template>


<style lang="scss" scoped>
/* Utility */

.red{
    color: crimson;
}

.no-margin{
    margin: 0;
}


/* Style*/

li{
    font-size: 24px;
}

.my-container{
    max-width: 1200px;
    margin: 0 auto;
}

/* Main */

.crit-section{
    position: relative;
    overflow: hidden;
    font-family: 'Times New Roman', Times, serif;
    color: black;
    h2{
        font-size: 2rem;
    }
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(137, 0, 250, 0.1), rgba(0, 0, 0, 0.9)), url('/imgs/maxcoach-shape-13.png');
    background-size: 2%;
}

.crit-section__description{
    ul{
        list-style: circle;
    }
}

/* Sidebar */
.mostra-lista-danni{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    top: calc(50% - 10px);
    right: 1%;
    color: white;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
    &:hover{
        cursor: pointer;
        span{
            color: crimson;
            text-shadow: rgb(255, 255, 255) 1px 0 10px;
        }
    }
}

.lista-danni{
    height: 70vh;
    padding: 50px;
    position: fixed;    
    top: calc(50% - 25vh);
    right: 1%;
    color: white;
    background-color: rgba(109, 109, 109, 0.5);
    text-align: center;
    overflow-y: scroll;
    scrollbar-width: none;       
    &::-webkit-scrollbar {
        width: 0; 
    }

    ul{
        margin: 0;
        padding: 0;
    }
    h4{
        top: 1%;
        right: 4%;
        &:hover{
            color: crimson;
            cursor: pointer;
            text-shadow: rgb(255, 255, 255) 1px 0 10px;;
        }
    }
}

.lista-danni h2{
    margin-bottom: 15px;
    color: rgb(255, 0, 51);
    margin-top: -25px;
}

.lista-danni li{
    margin-bottom: 10px;
}

.lista-danni li:last-child{
    margin-bottom: 0;
}

.lista-danni a:hover{
    color: crimson;
    text-shadow: rgb(0, 0, 0) 1px 0 10px;;
}

.lista-danni a{
    color: white;
    text-decoration: none;
}

.tabs-section{
    padding: 100px 0;
}


/* Reset Button*/

.reset{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
}

.reset > button{
    // padding: 15px 30px;
    // color: wheat;
    // background-color: cornflowerblue;
    // font-size: 24px;
    margin-top: 50px;
}

/* Card Header*/

.my-card{
    background-color: white;
    border-radius: 10px;    
    max-width: 540px;
}

.my-card-header{
    margin-top: 50px;
    padding: 12px 24px;
    background-color: cornflowerblue;
    color: wheat;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-around;
}


/*^^Danni Header^^*/
.my-card-header.contundenti{
    background-color: rgb(24, 24, 24);
}

.my-card-header.perforanti{
    background-color: gray;
}

.my-card-header.taglienti{
    background-color: rgb(216, 216, 216);
    color: black;
}

.my-card-header.fuoco{
    background-color: rgb(243, 62, 62);
    color: black;
}

.my-card-header.freddo{
    background-color: rgb(188, 255, 244);
    color: black;
}

.my-card-header.fulmine{
    background-color: rgb(36, 36, 151);
    color: rgb(255, 255, 255);
}

.my-card-header.acido{
    background-color: rgb(205, 255, 130);
    color: black;
}

.my-card-header.veleno{
    background-color: rgb(32, 46, 0);
    color: rgb(255, 255, 255);
}

.my-card-header.forza{
    background-color: rgb(255, 190, 116);
    color: black;
}

.my-card-header.suono{
    background-color: rgb(132, 0, 255);
    color: black;
}

.my-card-header.radiante{
    background-color: rgb(240, 234, 171);
    color: black;
}

.my-card-header.necrotico{
    background-color: rgb(22, 0, 44);
    color: rgb(255, 255, 255);
}

.my-card-header.psichico{
    background-color: rgb(255, 164, 225);
    color: black;
}

.my-card-header.vuoto{
    background-color: rgb(0, 0, 0);
    color: rgb(62, 33, 129);
}



.my-card-header > h2{
    margin-right: 25px;
}

.button-light,
.button-dark,
.button-void{
    padding: 5px 20px;
    background-color: transparent;
    font-size: 22px;
    border-radius: 18px;
    cursor: pointer;
}

.button-light{
    border: 3px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    &:hover{
        background-color: rgb(0, 0, 0);
    }
}

.button-dark{
    border: 3px solid rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    &:hover{
        background-color: white;
    }
}


.button-void{
    border: 3px solid rgb(62, 33, 129);
    color: rgb(62, 33, 129);
    &:hover{
        background-color: white;
    }
}

/* Card Content */

.my-card-body{
    padding: 15px;
}

.effect{
    border-bottom: 1px solid black;
    padding: 5px 0;
    padding-left: 30px;
}

.effect:first-child{
    border-top: 1px solid black;
}


.selected{
    color: rgb(255, 255, 255);
    background-color: black;
}


/* Card Footer */

.after{
    padding: 0 24px;
    margin-left: 35px;
    max-width: 540px;
    min-height: 700px;
}

.after p{
    font-size: 28px;
}

.effetto,
.speciale{
    margin-top: 30px;
    margin-bottom: 50px;
}

.effetto p{
    color: rgb(255, 255, 255);
}


.speciale p{
    color: rgb(241, 173, 25);
}


.cura p{
    color: rgb(156, 255, 156);
}


</style>