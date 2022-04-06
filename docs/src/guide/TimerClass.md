# Timer Class

## Introduction

Use this class to create a timer inside objects, you can set function for when it ends and set it to loop.
::: tip
using BigasTools;
:::

## Timer <Badge text="finished"/>

``` aspnet
var timer = new Timer(5, true);
timer.onComplete += ()=> {};

void Update(){
    timer.Update();
}
```
Create a timer inside a object, you can set it to loop or not in the parameters and add the Update() function inside an Update().