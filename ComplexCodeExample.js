// Filename: ComplexCodeExample.js
// Description: This code showcases a complex JavaScript implementation for a social media platform.

// Data models
class User {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.posts = [];
    this.friends = [];
    this.notifications = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  addFriend(user) {
    this.friends.push(user);
  }

  removeFriend(user) {
    const index = this.friends.indexOf(user);
    if (index > -1) {
      this.friends.splice(index, 1);
    }
  }

  sendNotification(notification) {
    this.notifications.push(notification);
  }
}

class Post {
  constructor(user, content) {
    this.author = user;
    this.content = content;
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Usage
const john = new User("John Doe", 25, "New York");
const jane = new User("Jane Smith", 30, "Los Angeles");

john.addFriend(jane);
jane.addFriend(john);

const post1 = new Post(john, "Hello, world!");
const post2 = new Post(jane, "I love JavaScript!");

john.addPost(post1);
jane.addPost(post2);

post1.like();
post2.like();
post2.like();

const comment1 = new Comment(john, "Great post!");
const comment2 = new Comment(jane, "I couldn't agree more!");

post1.addComment(comment1);
post2.addComment(comment2);

john.sendNotification("You have a new friend request from Jane Smith.");
jane.sendNotification("John Doe liked your post!");

console.log(john);
console.log(jane);

// Complex example continues...

// ... (Additional lines of code)