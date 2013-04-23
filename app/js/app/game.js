  

  function HeadGuy(x, y) {
    this.x = x;
    this.y = y;
  };

  function TailGuy(x, y, face) {
    this.x = x;
    this.y = y;
    this.face = face;
  };

  function Game(opts, callback){
    this.diff = opts.diff;
    this.callback = callback;

    var player = new HeadGuy(
      config.field.width / 2,
      config.field.height / 2);


  };
