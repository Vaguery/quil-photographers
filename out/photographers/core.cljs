(ns photographers.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  {:color 0
   :angle 0})

(defn update-state [state]
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.01)})


(defn build-area
  [camera-x camera-y focus-distance focal-depth field-of-view]
  (let [inner (- focus-distance (* (/ 1 3) focal-depth))
        outer (+ focus-distance (* (/ 2 3) focal-depth))
        half-angle (/ field-of-view 2)]
    ;(q/quad inner (* inner (q/tan half-angle))
    ;       outer (* outer (q/tan half-angle))
    ;       outer (* outer (- (q/tan half-angle)))
    ;       inner (* inner (- (q/tan half-angle))))
    (q/line 0 0 (* 1000 (q/cos half-angle)) (* 1000 (q/sin half-angle)))
    (q/line 0 0 (* 1000 (q/cos half-angle)) (* -1000 (q/sin half-angle)))
    (q/line focus-distance 1000 focus-distance -1000)
            ))



(defn draw-state [state]
  ;(q/background 240)
  (q/fill (:color state) 255 255 11)
  (q/stroke (:color state) 255 255 11)
  (let [angle (:angle state)
        x (* 100 (q/cos angle))
        y (* 100 (q/sin angle))]
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (q/with-translation [x y]
        ;(q/ellipse 0 0 10 10)
        (q/with-rotation [(* 12.3 angle)]
          (build-area x y 100 50 (q/radians 85))
          )))))
          
          

(q/defsketch photographers
  :host "photographers"
  :size [800 800]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
