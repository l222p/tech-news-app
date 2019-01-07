import { trigger, state, style, animate, transition } from '@angular/animations';

export function visibilidad() {
    return trigger('visibilidad', [
        state('visible', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('oculto', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ]);
}