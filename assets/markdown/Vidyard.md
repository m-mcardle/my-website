
---

<row>

  <column>

  ### Welcome!

  On this page I will be going into great detail about my co-op placement during my time at the amazing Kitchener company Vidyard.

  </column>

  <column>

  ![Vidyard logo](https://www.productboard.com/wp-content/uploads/2020/06/vidyard.png)

  </column>

</row>

---

<row>

  <column>

  ### About Vidyard
  
  [Vidyard](https://vidyard.com/) is a software company based in Kitchener which provides tools for the modern-day professional. They specialize primarily in providing value through video tooling which provides thorough analytics to enable their users to qualify their leads based on engagement with their video content. It was founded by two University of Waterloo students in 2010 as their Capstone Project, and the company still has a very Waterloo-centric culture. As a co-op not from the University of Waterloo, I found myself in a great opportunity to show the company that there are amazing students from all universities across Canada and made it a goal of mine to help open the door for future applicants from the University of Guelph.

  </column>

  <column>

  ![Vidyard office building](https://whitneyre.com/wp-content/uploads/Main-Image-41-488x326.jpg)

  </column>

</row>

---

<row>

  <column>

  ### Dashboard
  
  The main infrastructure I would end up working with was known as Dashboard. This essentially was the web application that our users would access to navigate to their library of videos, view analytics, manage user accounts, and more. The Dashboard repository was written using the Ruby on Rails framework for the backend and Vue.js for the front-end. Both of these frameworks were totally new to me, so I was very excited to work with them and learn!

  </column>

  <column>

  ![Ruby on Rails logo](https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png)
  ![Vue logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png)

  </column>

</row>

---

<row>

  <column>

  ### Team Performance Dashboard
  
  More specifically, I would be working primarily on the **Team Performance Dashboard** which was an analytics dashboard that was currently in BETA when I joined. It's focus was on providing engagement metrics based on who on your team is creating the most videos, receiving the most views, and invoking the most actions from their viewers. When I joined it was a mere prototype of what was intended, and through the course of my four months there, my team and I would bring the dashboard out of a BETA and fully release it to our enterprise customers. If you have a Vidyard account you should be able to view the demo dashboard [here](https://secure.vidyard.com/organizations/0/upgrades/team-performance), and check out the our marketing team's awesome promo for the page when it was originally announced.

  </column>

  <column>
  
  <iframe class="vidyard_iframe" src="//play.vidyard.com/mZnVwKZa9GvjLUCyeJWfT1.html?" width=320 height=180 scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen></iframe>

  </column>

</row>

---

<row>

  <column>

  ### ConstructionYard
  
  The repository I interacted with ended up being **ConstructionYard**. This repo hosts an internal npm package which contains a collection of reusable Vue components which is consumed across all Vue-based parts of the platform. These components can differ from simple buttons to interactive calenders and everything in between. I would end up working very closely with this repo and would become quite familiar with the workflow involved and policies of development inside of it. This would be where my team would build out the new filters, menus, and other components involved in our Team Performance Dashboard project which I will discuss in more detail later.

  </column>

  <column>

  ![Vue logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png)
  ![Construction clip art of crane and building in black and white](https://png.pngtree.com/png-vector/20190227/ourlarge/pngtree-vector-construction-house-icon-png-image_708533.jpg)

  </column>

</row>

---

<row>

  <column>

  ### My Team / Introduction
  
  I joined during an interesting time for the company as engineering was going through a major reorganization. When I joined it was the first week of my team's formal existence as the Sales Track team. This team was put together to have a focus on our analytics service as well as developing monitors for the health of our platform. Of course because a team of developers will never accept their formal name, my team decided to internally call ourselves the **Sales Trek** team.

  </column>

  <column>

  ![Star Trek icon](https://www.shareicon.net/data/2015/09/14/100884_star-trek_512x512.png)

  </column>

</row>

---

<row>

  <column>

  ### Bug Fixes
  
  When I first joined the Track team they were in the closing stages of a project to extend functionality to enable our enterprise customers to attach webhooks into our auditing and logging service so they can monitor Vidyard events through their own software.

  <br/>

  Because of this, there was no value in me being ramped up on months of progress for only a week of contributions to the project. To make myself useful I dove straight into our backlog of bugs to investigate and resolve. Unfortunately for me, there were no easy 'slam-dunk' fixes sitting there for me.
  

  <br/>

  My first bug I grabbed involved an error messaging appearing in our video player when viewing a share-page on Firefox. The error message stated that the video was no longer available at the URL the user is on, and only appeared when a user navigated to the video from an outbound Facebook link.

  <br/>

  A few other developers had taken a stab at identifying the cause of the issue but other than providing steps to replicate the issue I was in the dark. I quickly came up with a hunch about the Firefox browser altering expected behavior to avoid any user tracking via Facebook's `fbclid`. I eventually ended up reading through the Firefox browser's C++ source code to discover that in cases where a URL contains this new tracking id, Firefox alters the expected behavior of outbound requests. This bug fix game me a great opportunity to learn a lot about our player's infrastructure and brush off my JavaScript skills and was a fun and challenging first task of my term.

  <br/>

  The next bug I attempted to fix involved concerns about out player's 'Call to Actions' and GDPR guidelines. Before this ticket I had never heard of GDPR, so I had a lot to learn when it came to the legalities of the issue. The issue was filed by a member of our Customer Success team when a customer noticed they were receiving the emails that their viewers had submit via the Call to Action in their video, but the viewers were not being identified via our analytics service due to the fact they hadn't consented to be tracked according to GDPR guidelines. Essentially we just wanted to make sure that this is the expected behavior and fix it if it wasn't.

  <br/>
  
  While I awaited a response from our legal team on the matter, I developed a prototype of a tweak to our player to only show Call to Actions when a user has consented to GDPR. Once legal finally had time to look into the issue they returned with the information that they were satisfied with the current behavior and no functionality needed to be changed. This was great news as that meant that no refactoring had to be done and I could finally close this ticket. While I was disappointed that my code wouldn't be needed I was still thrilled to get some more experience in new parts of our codebase and got some great opportunities to meet people from all parts of the organization as I investigated the issue.

  <br/>

  With these two nasty bugs closed it was finally time for me to jump right into my teams next project!

  </column>

  <column>

  ![Black bug clip art](https://cdn-icons-png.flaticon.com/512/78/78946.png)

  </column>

</row>

---

<row>

  <column>

  ### Custom Date Picker
  
  The first project I was able to contribute to involved extending the filters on the Team Performance Dashboard to build a new component to allow users to filter data by a custom date range through a calender selector. This involved building out the new component in our ConstructionYard Vue library and then replacing the old simple menu with this new component on the actual dashboard. My main contributions during this phase involved the logic behind disabling dates in the calender based on a preset maximum range of days along with a given earliest date. The solution involved in disabling dates in the calender itself was quite straightforward but I came to realize that both the technical design and UI design failed to accommodate for the manual text inputs that we planned to include in the component. This led me into many challenging and interesting design conversations with other developers on my team and my team's UI designer. I really enjoyed this as it was a great introduction to my team as I got to work alongside almost everyone on the team as we tried to remedy the oversights of our original plan. This project gave me some great experience with the Vue framework, and some great experience discussing complexity and design challenges with my peers.

  </column>

  <column>

  ![Black calender clip art](https://media.istockphoto.com/vectors/calendar-reminder-isolated-icon-vector-id670134048?k=20&m=670134048&s=612x612&w=0&h=10u65mgxivNAEYq5nqbg9reG_s9cGyLiVuWLf9ppE5g=)

  </column>

</row>

---

<row>

  <column>

  ### See More
  
  The next phase of our project involved extending the charts and tables to allow them to be opened in a 'See More' view to have the data from all users on the team be displayed instead of just the top 5. This involved tweaking our API endpoints for querying for data to support returning all users on a team which meant I got to make some changes in our Ruby on Rails backend which was awesome. I ended up being responsible for adjusting our Vuex store to support storing and fetching the data for these new modals appropriately, and it was very fun to learn about centralized stores in a web application.

  </column>

  <column>

  ![Binoculars clip art](https://media.istockphoto.com/vectors/binocular-field-glasses-flat-icon-vector-id494991460?k=20&m=494991460&s=612x612&w=0&h=Z6eCQG5jeZ4LxCc3Ghw2iJ8NVqiR0_F9EURd-TQvOZg=)

  </column>

</row>

---

<row>

  <column>

  ### GIF Police Guild
  
  Coming soon...

  </column>

  <column>

  ![Police officer clip art black and white](https://iconarchive.com/download/i91984/icons8/windows-8/Users-Police.ico)

  </column>

</row>

---

<row>

  <column>

  ### Multi-Select Team Filter
  
  Coming soon...

  </column>

  <column>

  ![Filter clip art](https://static.thenounproject.com/png/1014280-200.png)

  </column>

</row>

---

### Kudos

Coming soon...

---

### Conclusion / Summary

Coming soon...
