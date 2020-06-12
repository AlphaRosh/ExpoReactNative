import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack"
import BlogsListScreen from './src/screens/BlogsListScreen'
import ShowBlogScreen from './src/screens/ShowBlogScreen'
import CreateBlogScreen from './src/screens/CreateBlogScreen'
import EditBlogScreen from './src/screens/EditBlogScreen'

//Creating Stack 
const BlogsStack = createStackNavigator(
  {
    BlogsList: BlogsListScreen,
    ShowBlog: ShowBlogScreen,
    CreateBlog: CreateBlogScreen,
    EditBlog: EditBlogScreen
  },
  {
    initialRouteName: 'BlogsList',
    navigationOptions: {
      title: 'My Blogs'
      
    }
  }

  
);

// export default createAppContainer(BlogsStack)
//App Container
const App = createAppContainer(BlogsStack);

//export 
export default () => {
  return (
    <App/>
  )
}

