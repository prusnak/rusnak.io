---
layout: post
title: Strange Attractions
---

Last week [Lenka Hamosova](https://hamosova.com) and I were invited to Barcelona, more particularly to a zine fair focused on technology and artificial intelligence called [CtrlZ.AI](https://ctrlz.ai/). Thank you [Emily](https://cs.nyu.edu/~denton/) and [Alex](https://alex-hanna.com/) for inviting us!

The main reason to come was to deliver a workshop titled Collective Vision of Synthetic Reality. Our goal was to educate attendees about various machine learning and artificial intelligence models and let them speculate about a variety of future use-cases when these models are already standard parts of our lives. Lenka even designed a set of trigger cards to help attendees get up to speed quickly. These were a huge success, and you'll be able to read about them, and the whole workshop in Lenka's write-up soon.

Because the event was a zine fair, organizers asked us whether we'd be able to come up with some merch we'd present at the table. We revived some of our old [StyleGAN](https://github.com/NVlabs/stylegan) experiments, where we generated random vectors and fed them into the GAN. As you'd have guessed, this produces a realistically looking face, similar to ones imagined at [thispersondoesnotexist.com](https://thispersondoesnotexist.com/). But what happens when we change this code

``` python
import numpy as np

sigma = 1.0
shape = (1, 512)
z = np.random.randn(*shape) * sigma

images = Gs.run(z, None, **Gs_kwargs)
return images[0]
```

into this?

``` python
import numpy as np

sigma = 1.0
shape = (1, 18, 512)
z = np.random.randn(*shape) * sigma

images = Gs.components.synthesis.run(z, **Gs_kwargs)
return images[0]
```

Suddenly, you'll end up with a beautiful set of creepy, uncanny, or abstract results, depending on how much random is your vector input. This can be controlled by altering the `sigma` value - standard deviation.

[![strange-attractions-thumbs](/assets/strange-attractions-thumbs.jpg)](https://strangeattractions.xyz/)

Using this process, we generated 5000 images, and Lenka cherry-picked 40 of them (she saw faces everywhere after this :D). We turned these into 20x20 cm prints and brought them to the fair. Yay!

[![strange-attractions-prints](/assets/strange-attractions-prints.jpg)](https://strangeattractions.xyz/)

If you are fascinated by these results as much as we are, you should try the website we launched: [StrangeAttractions.xyz](https://strangeattractions.xyz) - it will give you a new art piece every time you click on the image.

Later, we even made an Instagram filter called "Strange Attractions," which you can find and install from [Lenka's profile](https://instagram.com/lenkahamosova/). The outputs from this filter are also astonishing!

[![strange-attractions-sparkar](/assets/strange-attractions-sparkar.jpg)](https://instagram.com/lenkahamosova/)

[![strange-attractions-instagram](/assets/strange-attractions-instagram.jpg)](https://instagram.com/lenkahamosova/)

Finally, we were also experimenting with StyleGAN2, but this did not provide as colorful and eye-popping visuals as the original StyleGAN.
