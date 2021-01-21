import React,{ useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getList } from '../Api/getUserlist';
import UserList from './userList';
import UserProfile from './userProfile';
import 'bootstrap/dist/css/bootstrap.min.css';

const TabSection=()=>{
    const [list, setList] = useState([]);
    const [userdata, setUserdata] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        let mounted = true;
        getList()
          .then(items => {
            if(mounted) {
              setList(items)
            }
          })
        return () => mounted = false;
      }, [])
      console.log("list",list)

      const navigateToprofile=(val)=>{
        setTabIndex(1);
        setUserdata(val);
        console.log(userdata);
        
       
      }
      return(
        <div className="centersection">
             <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                <TabList>
                    <Tab>User List</Tab>
                    <Tab>User Profile</Tab>
                </TabList>
                <TabPanel>
                    <UserList list={list && list}  navigateToprofile={navigateToprofile}/>
                 </TabPanel>
                 <TabPanel>
                    <UserProfile userdata={userdata && userdata} />
                </TabPanel>
            </Tabs>
       </div>
    
    )
   
} 


export default  TabSection;