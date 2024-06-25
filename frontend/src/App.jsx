import { Tabs, TabList, Tab, TabPanel, TabPanels, TabIndicator, Flex, Spacer, Box } from '@chakra-ui/react'
import  Home  from './pages/home'
import Account from './components/Account'

function App() {

  return (
    <Box>
    <Box>
      <div >
      <Tabs position='relative' variant='unstyled'>
        <Box display={'flex'} justifyContent={'space-between'} pr={'10'} pl={'10'} bg={'red.200'}>

  <TabList >
    <Tab>Home</Tab>
    <Tab>About</Tab>
    <Tab>Three</Tab>
  </TabList>
    <Account/>
        </Box>
  <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
  <TabPanels>
    <TabPanel>
      <Home />
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </div>
      </Box>
    </Box>
  )
}

export default App
