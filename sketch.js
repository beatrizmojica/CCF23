function setup() {
  createCanvas(400, 400);
  background(230,215,255);
  line(90,310,310,310);

  fill(15)
  bezier(85,310,90,40,315,30,310,310);//hair
  fill(200,0,0);
  rect(130,220,35,90);//red hair L
  rect(230,220,35,90);//red hair R

  fill(247,210,180);
  rect(166,260,63,60);//neck
ellipse(200,200,140,180);//head
rect(115,308,165,120,20);//body

fill(15);
triangle(150,335,150,400,240,400);//shirt
triangle(160,400,245,335,245,400);//shirt
rect(150,308,10,45);//shirt strap L
rect(235,308,10,45);//shirt strap R

bezier(120,165,90,195,180,208,205,105);// bangs L
bezier(120,165,120,150,200,90,205,107);//bangs L
bezier(205,105,205,195,320,203,280,165);//bangs R
bezier(205,107,205,85,270,160,280,165);//bangs R

fill(0);
ellipse(170,185,15,15);//eyes
ellipse(235,185,15,15);//eyes
fill(255);
ellipse(172,183,7,7)//eye glimmer
ellipse(233,183,7,7)//eye glimmer
strokeWeight(1);
noFill();
strokeWeight(2);

fill(255,152,193)
bezier(178,242,185,259,220,259,227,242);//smile

strokeWeight(3);
line(145,170,195,170);//glasses top L
line(210,170,260,170);//glasses top R
noFill();
bezier(210,172,210,220,257,220,260,172);//glasses lens R
bezier(145,172,145,220,195,220,195,172);//glasses lens L
strokeWeight(3);
line(195,180,210,180);//glasses nose bridge
line(122,180,145,182);//glasses leg
line(260,182,279,180);//glasses leg

strokeWeight(2)
bezier(205,205,207,210,220,220,204,225);//nose

stroke(160)
bezier(165,308,175,350,220,350,230,308)//necklace
fill(170)
ellipse(198,345,10,10)//pendant
}
