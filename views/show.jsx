const React = require('react')  
class Show extends React.Component {
   render () {
    const fruit = this.
    return (
      <h1> Show Page </h1>
      The {fruit.name} is {fruit.color}
      {fruit.readyToEat ? 'Its ready to eat' : 'it is not ready to eat....cant touch this'}
     );
    }
 }
 module.exports  = Show;