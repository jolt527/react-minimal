This is a minimal react setup that was created using the
[React Setup tutorial](https://www.codecademy.com/articles/react-setup-i).
I've also added some minimal redux usage to this tutorial as well.

I had to make a few changes to get it working, mostly in the webpack.config.js
file.  This was due to how the "loaders" section has changed to "rules"
(see [this StackOverflow article](https://stackoverflow.com/questions/49370849/configuration-module-has-an-unknown-property-loaders)
for more details).

For the redux side, I also had to make some changes to get the spread operator
to work correctly (see [this StackOverflow article](https://stackoverflow.com/questions/38490804/spread-operator-in-react-throwing-error-of-unexpected-token/38490899)
for more details)
