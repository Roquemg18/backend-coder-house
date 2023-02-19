class TicketManager {
    #eventos = [];
    #precioBaseDeGanancia = 0;

    getEventos() {
        return this.#eventos;
    }

agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
        id: this.#eventos.length + 1,
        nombre: nombre,
        lugar: lugar,
        precio: precio * 1.15 + this.#precioBaseDeGanancia,
        capacidad: capacidad,
        fecha: fecha,
        participantes: [],
    };
    this.#eventos.push(evento);
    return evento;
}

agregarUsuario(eventoId, usuarioId) {
    const evento = this.#eventos.find((e) => e.id === eventoId);
    if (!evento) {
        throw new Error(`No se encontró el evento con id ${eventoId}`);
    }
    if (evento.participantes.includes(usuarioId)) {
        throw new Error(`El usuario con id ${usuarioId} ya está registrado en el evento`);
    }
    evento.participantes.push(usuarioId);
}

ponerEventoEnGira(eventoId, nuevaLocalidad, nuevaFecha) {
    const evento = this.#eventos.find((e) => e.id === eventoId);
    if (!evento) {
        throw new Error(`No se encontró el evento con id ${eventoId}`);
    }
    const eventoEnGira = {
        ...evento,
        id: this.#eventos.length + 1,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: [],
    };
    this.#eventos.push(eventoEnGira);
        return eventoEnGira;
}

    set precioBaseDeGanancia(valor) {
        this.#precioBaseDeGanancia = valor;
    }
}


//ejemplo
/* const tomorrowland = new TicketManager();
        tomorrowland.precioBaseDeGanancia = 100;

        const TomorrowlandAmerica = tomorrowland.agregarEvento("tomorrowland", "brasil", 250,10000);

        //error de mismo id usuario
        //tomorrowland.agregarUsuario(1,5)
        //tomorrowland.agregarUsuario(1,5) 
        //error id evento no encontrado
        //*tomorrowland.agregarUsuario(3,20)

        tomorrowland.agregarUsuario(1,1)
        tomorrowland.agregarUsuario(1,22)
        console.log(tomorrowland.getEventos());

        const TomorrowlandEuropa = tomorrowland.ponerEventoEnGira(1,"España","2024-06-01");
        console.log(TomorrowlandEuropa); */


