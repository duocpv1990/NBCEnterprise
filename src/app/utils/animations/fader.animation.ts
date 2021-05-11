import { trigger, transition, query, style, animate, group } from "@angular/animations";

export const fader =
  trigger('routeAnimations', [
    transition( '* => *', [
      query(':enter', 
          [
              style({ position: 'absolute',width: '100%',height:'100%', opacity: 0 })
          ], 
          { optional: true }
      ),
      query(':leave', 
          [
              style({position: 'absolute',width: '100%',height:'100%',  opacity: 1 }),
              animate('0.5s', style({ opacity: 0,transform: 'translateX(100%)' }))
          ], 
          { optional: true }
      ),

      query(':enter', 
          [
              style({position: 'absolute',width: '100%',height:'100%',  opacity: 0 }),
              animate('0.5s', style({ opacity: 1,transform: 'translateX(0%)' }))
          ], 
          { optional: true }
      )

  ])
  ]);
