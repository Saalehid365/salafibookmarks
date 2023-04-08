import React from "react";

const Googlemap = () => {
  return (
    <div className="flex justify-center pt-24">
      <iframe
        width="1366"
        height="474"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=1366&amp;height=474&amp;hl=en&amp;q=bonham%20grove%20birmingham+(Salafi%20Bookmarks)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <a href="https://maps-generator.com/"></a>
    </div>
  );
};

export default Googlemap;
