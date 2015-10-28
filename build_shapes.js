var Scene = function() {

  var scene = document.getElementById("scene")
    
    var randPosition = function() {
      var dimensionLimits = [6,2,4]
      var randCoords = []
      for (var i = 0; i < dimensionLimits.length ;i++) {
        var limit = dimensionLimits[i]
        var randSignedMultiplier = (Math.random() * 2) - 1
        var randCoord = randSignedMultiplier * limit
        randCoords.push(randCoord)
      }

      return randCoords.join(", ")
    };
    this.createShape = function(diffuseColor, shapeName, translation) {
      
      var translation = !translation ? randPosition() : translation
      var transform = new Transform(translation)
      var material = new Material(diffuseColor);
      var appearance = new Appearance(material);

      me = new Shape(shapeName, transform, material, appearance);
      transform.appendChild(me)
      scene.appendChild(transform)

      return me;
    };
  
  return this
}

var Transform = function(translation) { 
  me = document.createElement("transform")
  me.setAttribute("translation", translation)
  return me;
};

var Material = function(diffuseColor) {

  mat = document.createElement("material")
  mat.setAttribute("diffuseColor", diffuseColor);
  return mat

};

var Appearance = function(material) { 

  var me = document.createElement("appearance")
  me.appendChild(material)
  return me

};

var Shape = function(name, transform, material, appearance) { 

  var me = document.createElement("shape")
  var shapeTypes = {'foo': 'box',
                    'bar': 'sphere',
                    'fuzz': 'cone'
                  };
  
  me.appendChild(document.createElement(shapeTypes[name]))

  appearance.appendChild(material);
  me.appendChild(appearance);
  transform.appendChild(me);

  return me;

};

function createRandomShape (shapeName) {
  Scene().createShape('0.603 0.894 0.909',shapeName);
};

createRandomShape()