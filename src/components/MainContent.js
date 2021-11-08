import React from 'react'

const MainContent = () => {
    const sampleText = (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu a purus tempor aliquam. Aenean vitae pellentesque purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ut odio in elit vehicula interdum. Ut erat nunc, ultrices non commodo in, aliquam vitae urna. Phasellus eget tortor vel nisi feugiat mollis ac cursus nunc. Etiam gravida orci lacus, ac tincidunt tellus ultricies a. Cras consequat, mauris consectetur accumsan iaculis, nisi neque egestas risus, quis tincidunt lorem velit vel nulla. In quis placerat ex, vel consequat massa. Sed erat velit, laoreet sed libero ac, luctus tristique metus. Aliquam felis tortor, interdum a odio a, placerat malesuada risus. Cras mauris sem, mollis ac lacinia ac, porttitor nec dolor. Maecenas egestas sapien nec tortor viverra, sit amet pellentesque ipsum tincidunt. Maecenas sit amet malesuada eros. Cras in euismod orci, at porttitor lectus.

Phasellus eget libero justo. Vestibulum porttitor enim at euismod accumsan. Etiam porttitor molestie enim, et dictum magna placerat sed. Aliquam dictum porta turpis, sed egestas lorem condimentum in. Suspendisse congue justo laoreet, tincidunt purus non, dignissim dolor. Duis ultrices placerat luctus. Vestibulum feugiat mauris neque, ac dignissim elit sollicitudin id. Cras eu urna nec arcu imperdiet tempus. Donec convallis vitae augue nec vulputate.

Vestibulum elementum quis mauris blandit luctus. Donec imperdiet at lacus eget tempus. Praesent nulla orci, iaculis at tempor at, vehicula vel odio. Curabitur id scelerisque dolor, id porta purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sit amet lorem faucibus, volutpat metus non, sagittis enim. Quisque a tellus ultrices, eleifend libero vel, ornare tellus. In et tristique purus, quis ornare tortor. Donec ac nisl at nunc pellentesque vulputate. Quisque pulvinar, leo sed volutpat condimentum, odio leo placerat justo, varius tristique ex nisl nec velit. Praesent eu convallis magna.

Proin imperdiet aliquam mi sed auctor. Nulla quis sapien at neque facilisis tempor. Nullam nec eros et tellus vestibulum tempus. Sed et dignissim libero. Nullam hendrerit orci vel nibh commodo tristique. Nam lobortis nisl ac sapien dapibus, vitae eleifend magna cursus. Nunc ut purus quis dui tempor dictum vitae eu tellus. Etiam vulputate ex tempus magna semper varius. In luctus, magna sit amet pulvinar elementum, mi arcu vehicula quam, vitae auctor nulla lorem eget purus.

Nunc pulvinar vulputate pharetra. Vivamus non mattis est. Integer sollicitudin, neque non dapibus mattis, nisi eros posuere diam, a lacinia purus velit eget neque. Quisque pulvinar risus ut purus scelerisque tempus in a felis. Nam scelerisque sodales facilisis. Sed a justo ac ligula molestie sodales et vel augue. Vivamus nec ante ipsum. Morbi mattis purus leo, non pulvinar odio molestie vitae. Fusce ornare aliquam erat quis tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu volutpat risus, venenatis egestas turpis. Integer fermentum molestie arcu ut commodo. Maecenas id ornare risus. Ut vitae facilisis arcu. Nulla a tincidunt est. Morbi viverra dui massa.
        </p>
    )
    return(
        <article id="mainContent">
            <div className="container">
                <div className="item">
                    {sampleText}
                </div>
                <div className="item">
                    {sampleText}
                </div>
                <div className="item">
                    {sampleText}
                </div>
            </div>
        </article>
    )
}

export default MainContent; 