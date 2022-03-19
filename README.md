# ListTrackr

ListTrackr is a place to create lists to help you get through everyday life. From a list of stuff you need to get at the store, to a list of things to pack on vacation, you can create lists can help us stay organized and keep track of anything in life so we don't have to try and remember them all on our own. 

With ListTrackr you are able to create new lists with a title, add items/things to your list, edit and delete any list items, and "complete" items on your list after they are no longer needed/ finished. You can click on a list item to complete it and it will darken and be crossed out with a line through it and can delete your lists at any time.

## How to Install and Run the Project

There are 2 repos you need to run this app - backend and frontend.

Heres what to do:

1. Fork and clone the backend repo from this link: https://github.com/jesspesale/ListTrackr-backend

2. From the backend directory run the following commands:
    - bundle install
    - rake db:migrate
    - rails s

3. Fork and clone the frontend (that you are reading) and run the following commands in the frontend directory in your terminal:
    - npm install
    - npm start (should automatically run on port 3001)

Then the site should pop open in the browser

Or you can just check out the deployed site: https://listtrackr.netlify.app/


##  How to Use the Project

There are 3 buttons in the navbar to guide you through the application:

1. **Home** - just tells you a little about the app and what to use it for  
2. **Lists** - Displays all of the lists in the database by their titles. Each title is a link to that list's page  
3. **Create a new list** - Displays a small form to type in your new list title. After submitting it brings you back to the "lists" page to see all created list titles as links.

When you click on the title of an individual list after clicking the "Lists" button it brings you to that list show page where it displays the title and all the list items for that specific list. There is a form to add other list items, and a delete button at the bottom to delete the entire list. 

Next to each list item there are two buttons - a garbage can (delete button) and an edit symbol. You can edit or delete any list item at any point in time. You can also click on a list item once it is finished/ complete and it will cross out that item.

## Motivation

I use lists everyday to help me remember things so I know I won't forget anything. Once I start thinking of things I need to get from the store, I make a list. When I have a more than two things I know I need to get done after work, I make a list. I love to travel so I make a list for every trip I go on to make sure I pack everything I need. Lists help me get through my life without being worried I am forgetting something, so I created this basic application to help me create and update lists in a convienent way.

## Contributing
After forking and cloning this lab you are welcome to make any additions that would improve this app. You can make pull requests to https://github.com/jesspesale/ListTrackr-frontend

## License
This web app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
