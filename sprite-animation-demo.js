// Copyright 2013 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
 

	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	// MIT license


			
	var coin,
		coinImage,
		canvas;					


	
	function Sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		that.primerFrame=options.primerFrame;

		that.escala=1.414

		that.imgs=[];
		for (let i=0;i<options.numberOfFrames;i++){
			let cero="";
			if(i<9){
				cero="0"
			}else{
				cero=""
			}
			let src=options.primerFrame+cero+(i+1)+".png";
			let img=new Image();
			img.src=src;
			that.imgs.push(img);
		}

		that.x=0;
		that.y=0;
		
		that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
		
		that.render = function () {
		
		  // Clear the canvas
		 // that.context.clearRect(that.x, that.y, that.width/numberOfFrames, that.height);
		  
		  // Draw the animation
		//  console.log( that.imgs[frameIndex],that.x,that.y)

		

	     that.context.drawImage(
		   that.imgs[frameIndex],
		   that.x-50,
		    that.y-50,100*that.escala,100);
		};


		
		return that;
	} //fin clase sprite

	
	// Get canvas
/*	canvas = document.getElementById("canvas");
	canvas.width = 100;
	canvas.height = 100;
	
	// Create sprite sheet
	coinImage = new Image();	
	
	// Create sprite
	coin = sprite({
		context: canvas.getContext("2d"),
		width: 1000,
		height: 100,
		image: coinImage,
		numberOfFrames: 10,
		ticksPerFrame: 4
	});
	
	// Load sprite sheet
	coinImage.addEventListener("load", gameLoop);
	coinImage.src = "images/coin-sprite-animation.png";
*/


