function orderRectangles(arr) {
    function createRect(width, height){
        let rect =  {
            width: width,
            height: height,
            area: function () {
               return rect.width * rect.height;
            },
            compareTo: function(other) {
                return other.area() - rect.area() || other.width - rect.width;
            }
        };

        return rect;
    }

    let rects = [];
    for (let [width, height] of arr) {
        rects.push(createRect(width, height))
    }

    rects.sort((a, b) => a.compareTo(b));
    return rects; 
}
