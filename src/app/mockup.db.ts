//export var equipo = [];
//export var tareas_equipos = [];

export function fillTask(numero) {

    var tasks = [];
    var states = ["1", "2", "3"]

    for (let i = 0; i < numero; i++) {

        let state = getRandomInt(0, 3)

        tasks.push({
            "id": i,
            "created_by": null,
            "teamspace": null,
            "title": `titulo de ejemplo ${i}`,
            "description": `Descripción de la tarea ${i} de ejemplo.`,
            "is_delete": false,
            "state": states[state],
            "expiration_date": "13/11/20",
            "create_at": null,
            "update_at": null
        })
    }

    return tasks;

}

export function fillTeams(numero) {

    var teams = [];

    for (let i = 0; i < numero; i++) {

        teams.push({
            "id": i,
            "name": `Nombre del equipo ${i}`,
            "description": `Descripción del quipo número ${i} de ejemplo.`,
        })
    }
    return teams;
}

function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
}

export const CATEGORIES = [{id: 1, name: 'Educación'}, {id: 2, name: 'Salud'}, {id: 3, name: 'Trabajo'}];