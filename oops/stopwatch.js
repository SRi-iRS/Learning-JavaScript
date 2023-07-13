
function Stopwatch() { 
  //let startTime, endTime, running, duration = 0;
  this.duration = 0;
  running = false;
  
  // Object.defineProperty(this, 'duration', {
  //   get: function() { return duration; },
  //   set: function(val){ duration = val; }
  // });
  // Object.defineProperty(this, 'startTime', {
  //   get: function() { return startTime; }
  // });
  // Object.defineProperty(this, 'endTime', {
  //   get: function() { return endTime; }
  // });
  Object.defineProperty(this, 'running', {
    get: function() { return running; },
    set: function(val) {running = val;}
  });
}

Stopwatch.prototype.start = function() {
  if (this.running) 
    throw new Error('Stopwatch has already started.');
  
  this.running = true; 
  console.log(this.running+"kkk");
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function() {
  if (!this.running) 
    throw new Error('Stopwatch is not started.');
 
  this.running = false; 
    
  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds; 
};

Stopwatch.prototype.reset = function() { 
  this.startTime = null;
  this.endTime = null;
  this.running = false; 
  this.duration = 0; 
};

const sw = new Stopwatch();

sw.start();
console.log(sw.duration);
sw.stop();
// sw.stop();
console.log(sw.duration);
sw.stop();
sw.reset();
console.log(sw.duration);
