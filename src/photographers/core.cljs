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

(defn draw-state [state]
  (q/background 240)
  (q/no-stroke)
  (q/fill (:color state) 255 255)
  (let [angle (:angle state)
        x (* 150 (q/cos angle))
        y (* 150 (q/sin angle))]
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (q/with-translation [x y]
        (q/ellipse 0 0 10 10)
        (q/with-rotation [(* angle 1.1)]
          (q/arc 0 0 200 200 -0.7854 0.7854)
          )))))

(q/defsketch photographers
  :host "photographers"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
