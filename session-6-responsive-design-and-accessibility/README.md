# Hackschool Session 6: Responsive Design and Accessibility

**Date**: November 18, 2020

**Location**: Zoom

**Teacher**: Kristie Lim ([@kristielim](https://github.com/kristielim))

## Resources

- [Slides](https://tinyurl.com/hackschool20-s6-slides)
- [ACM Membership Attendance Portal](http://members.uclaacm.com/login)

## What we'll be learning today

- [Hackschool Session 6: Responsive Design and Accessibility](#hackschool-session-6-responsive-design-and-accessibility)
  - [Resources](#resources)
  - [What we'll be learning today](#what-well-be-learning-today)
  - [Responsive Design](#responsive-design)
    - [Background](#background)
    - [Chrome Developer Tools](#chrome-developer-tools)
    - [Max Width](#max-width)
    - [Media queries](#media-queries)
    - [The Viewport Meta Tag](#the-viewport-meta-tag)
    - [Other Considerations](#other-considerations)
  - [Accessible Design](#accessible-design)
    - [Image Alt Text](#image-alt-text)
    - [Labels for Form Inputs](#labels-for-form-inputs)
    - [Semantic HTML](#semantic-html)
    - [Learning More About Accessibility](#learning-more-about-accessibility)

## Responsive Design

### Background

Responsive design means that your website is functional no matter the screen size. From [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design), it is "a set of practices that allows web pages to alter their layout and appearance to suit different screen widths."

When we're first learning HTML/CSS, it makes a lot of sense to design websites for a desktop screen since that's what we're also using to develop the website. However, when you're building a website for a wide audience, a mobile-friendly design becomes extremely important. According to [Pew Research](https://www.pewresearch.org/internet/fact-sheet/mobile/), 1 in 5 American adults are "smartphone-only" users. And in the world, it's projected that nearly 3 in 4 people will use only mobile for Internet by 2025 ([CNBC](https://www.cnbc.com/2019/01/24/smartphones-72percent-of-people-will-use-only-mobile-for-internet-by-2025.html)). With the growing importance of mobile users, you might hear the phrase "mobile-first" design. This means that the website is primarily designed for a mobile screen then the desktop screen design is adapted around that rather than the other way around. Nowadays, it is difficult to find a website that doesn't have a mobile-friendly design. Even CCLE has a mobile-friendly design, so if you want your website to be at least as good as CCLE you gotta have one.

A responsive website does not come for free! If you've been working on your own website without checking how it looks on a small screen, it's unlikely that it will look good. In this workshop, we'll learn a few techniques to help give that _chef's kiss_ look to your website on mobile.

### Chrome Developer Tools

Check how your website looks like with Chrome Developer Tools! Right-click -> "Inspect Element" in order to open. There is a dropdown at the top where you can see how your site looks on different devices such as an iPhone, a Moto G4, or an iPad.

![The button in Chrome Developer Tools that allows you to view your website on different devices is indicated with a red outline. The dropdown that allows you to change devices is also outlined.](images/chromedevtools.png)

From this point forward, we will be using a simple website to demonstrate a couple ways to make your website more responsive. Download `demo-starter.zip` to get the code. This is how the website looks on desktop:

<img src="images/demo.png" alt="Among Us themed website on desktop" height="300px"/>

I added borders to get a better sense of where each element is in relation to each other.

However there are a lot of problems when we take a look at the website on mobile:

<img src="images/startermobile.png" alt="Among Us themed website on mobile with portions of text and images cut off" height="300px"/>

### Max Width

First, let's try to avoid having the cover image cut off on small screens. The cover image has a class of `cover` which we will use to refer in the CSS. One helpful CSS property is `max-width`. When we set it, the image can never become larger than the value given. In our starter site, the image `width` is set to 600px. If we set a `max-width` of `100%`. This means that the width of the image can never be more than 100% of the parent `div`. In this case, the parent `div` is shown in a red outline.

```css
.cover {
  width: 600px;
  max-width: 100%;
}
```

There are also more advanced techniques to even replace images upon detecting a smaller screen size. Here's a [tutorial from MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

Below the cover photo, there are two more elements that also extend past the screen size called `text-container` and `character-container`. Once we change those elements' `max-width` to `100%`, we can see that nothing extends past the edge of the screen anymore.

<img src="images/maxwidth.png" alt="With the max width property set, the content of the page no longer extends past the edge of the screen." height="300px"/>

### Media queries

For more control over the styles when the screen size changes, we can use a CSS **media query**. A media query allows you to check what media or screen size is being used and then apply a different style according to the answer. Let's see some examples!

#### Changing the font size

First, this heading takes up about half of a small screen. I'd like to change the heading so that for small screens, the font size is smaller. Currently, the heading is 64px. Let's create a new media rule at the bottom of `styles.css`:

```css
@media screen and (max-width: 600px) {
  h1 {
    font-size: 42px;
  }
}
```

This says that for a screen that is at most 600 pixels wide, change the font size of heading 1's to be 42px instead. Now if we decrease the size of the screen to less than 600 pixels, the font size changes.

#### Changing the `display` value

I don't really like how squished the three columns of `text-container` look like on a small screen, so I'm going to get rid of the columns so that each paragraph is stacked on top of each other instead. Since the columns come from using `display: flex`, I can change the value to be `display: block` to get the stacked on top of each other behavior.

```css
@media screen and (max-width: 600px) {
  h1 {
    font-size: 42px;
  }
  .text-container {
    display: block;
  }
}
```

#### Changing from a four-column to a two-column layout

Lastly, I'd like the four columns of the `character-container` to change into two columns when I hit the breakpoint. From the starter code, each character's initial width is set to 25% of the parent:

```css
.character {
  flex: 25%;
}
```

> Note: `flex` is a property applied to items inside of a flex container. If a percentage is given, it will set the initial size of the item to be that percentage of its parent. The `flex` property is much more powerful than just that, and you can read more [from MDN here](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).

In my media query, I can change the value to be 50% of the parent instead to give me 2 columns instead of 4:

```css
@media screen and (max-width: 600px) {
  h1 {
    font-size: 42px;
  }
  .text-container {
    display: block;
  }
  .character {
    flex: 50%;
  }
}
```

The website should now look like this:

<img src="images/mediaquery.png" alt="After the media query is added, the text has changed to one column and the characters have changed to two columns." height="300px"/>

### The Viewport Meta Tag

Viewing the previous changes on a smaller desktop screen seems to work! However, once you change to simulate a phone, it doesn't seem to work anymore??? You may have forgotten to add this magic line to the `<head>` section of your HTML.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

By default on phones, mobile browsers will set the viewport width to 960 pixels and zoom out so you can see the whole screen as if it were on a desktop browser. This is a good enough experience when you don't have a mobile-friendly design, but we're striving for great not good enough here! When you do have a responsive design, you need to tell the browser to use the device width as the viewport width and to not scale aka `width=device-width,initial-scale=1` in code.

### Other Considerations

1. Hover interactions: On a phone, users cannot hover so make sure there isn't any information or features that are only accessible by hover.
2. Button size: Make sure buttons are big enough to easily tap in the mobile version.
3. Layout complexity: With less space, it can be overwhelming to have all of the same features as the desktop version. Consider simplifying the layout and removing unnecessary elements.
4. Browser support: This is a big category that could require an entire workshop by itself, but the nature of the web is that different browsers (Chrome, Firefox, Safari, Internet Explorer) behave in ever so slightly different ways and support slightly different features. Make sure when you view your website in different browsers that it still works.

## Accessible Design

Take a look at the [`accessibility-demo` folder](accessibility-demo/) for some good and bad examples of accessible design.

### Image Alt Text

A screen reader uses the alt text attribute on an image so that the user doesn't miss out on anything in the event that they can't see the image. Good alt text is a detailed but succinct description of the image. Check out some alt text guidelines [here](https://bighack.org/how-to-write-better-alt-text-descriptions-for-accessibility/). Alt text is also useful in situations where an image cannot be loaded, for example on a phone with low bandwidth.This is an example:

```html
<img
  class="meme"
  src="meme.png"
  alt="Among Us crewmates and mini crewmates sit
    in front of a whiteboard that states 'Mini crewmates should be able to do
    mini tasks'"
/>
```

One very bad way to create a contentful image is to use the `background-image` CSS property. This property should only be used for decorative images. Even though a background image might look the same on the surface as an image created using the `img` tag, it will be skipped over by the screen reader. This is how you can create a decorative image but not an image with actual content:

```html
<div class="image"></div>
```

```css
.image {
  background-image: url("meme.png");
  height: 300px;
  width: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

### Labels for Form Inputs

It is helpful for a screen reader user to know exactly what an input field is asking for through text. You can do this by adding a label. In the `for` attribute of the label, use the `id` of the input that the label is referring to.

```html
<label for="crew-name">Crewmate name:</label>
<input type="text" name="crew-name" id="crew-name" />
```

### Semantic HTML

Whenever possible, use HTML tags as they were meant to be used. For example, don't use headings for text that is not a heading. Similarly, if text is a heading, make sure it is labeled as `h1`. The screen reader only has this information to go from when describing the page to the user. So even if visually two pages appear the same, one may actually be missing a lot of key information such as what text is a heading or what columns are in a table.

This is correctly labeled:

```html
<h1>Tag Yourself</h1>
<h2>Pink</h2>
<img class="character" src="pink.png" alt="Pink Among Us character" />
<ul>
  <li>Shy</li>
  <li>Stays in groups because they're too scared to do task alone</li>
  <li>Has no idea what's going on</li>
</ul>
```

This is incorrect HTML even if it is the same visually:

```html
<div class="heading1">Tag Yourself</div>
<div class="heading2">Pink</div>
<img class="character" src="pink.png" alt="Pink Among Us character" />
<ul>
  <li>Shy</li>
  <li>Stays in groups because they're too scared to do task alone</li>
  <li>Has no idea what's going on</li>
</ul>
```

### Learning More About Accessibility

Accessibility is an extremely broad topic. More considerations include captions, allowing flickering content to be turned off, and making sure the website is able to be navigated by tabs. Here are some resources to learn more!

- [a11yresources](https://a11yresources.webflow.io/) is a beautiful website that links to curated accessibility articles and guides.
- [Accessibility Checklist from UX Design](https://uxdesign.cc/accessibility-checklist-195da7ab64fb) is a good list of accessibility considerations, broken down by different types of disabilities.
- [W3 Preliminary Tests](https://www.w3.org/WAI/test-evaluate/preliminary/) give the most critical accessibility tests and how to check if your website follows these standards.
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/) is an extension you can run on a website that helps identify accessibility-related errors.
- [NoCoffee Chrome Extension](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl?hl=en-US) is an extension that can simulate vision problems on Google Chrome.
- [Sim Daltonism for Mac](https://michelf.ca/projects/mac/sim-daltonism/) also can be used to simulate vision problems but acts as a filter over any application.
- [ChromeVox](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) is a screen reader Chrome extension that I used for the workshop demos.
