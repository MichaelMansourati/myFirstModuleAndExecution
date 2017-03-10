module.exports = {
  greatArtists: ['Beethoven', 'Bach', 'Frank Ocean', 'Talking Heads'],
  suggestion: function () {
    console.log('You should listen to ' + this.greatArtists.join(', ') + '.');
  }
}