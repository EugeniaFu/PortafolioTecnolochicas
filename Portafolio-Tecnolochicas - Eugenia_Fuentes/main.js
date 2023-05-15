let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color:#BB8995">Estudiante de ingenieria en Sistemas Computacionales</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
