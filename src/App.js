import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">

<table >
<tr>
<td><iframe name="1" src="https://chart-embed.service.eu.newrelic.com/herald/4a330413-d556-4c2b-b012-76cb820346a7?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
<td><iframe name="2" src="https://chart-embed.service.eu.newrelic.com/herald/5472e0a6-2216-4a94-9b6a-73dd1141f04a?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
<td><iframe name="3" src="https://chart-embed.service.eu.newrelic.com/herald/efc68b7d-75ce-49fb-9e6b-7715b39bf978?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
<td><iframe name="4" src="https://chart-embed.service.eu.newrelic.com/herald/9b09c911-5a12-4926-a49f-632d64baf26f?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
<td><iframe name="5" src="https://chart-embed.service.eu.newrelic.com/herald/b89ec034-72da-4deb-a653-a84b05c084cb?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
</tr>
<tr>
<td><iframe name="2.1" src="https://chart-embed.service.eu.newrelic.com/herald/fcf1bd17-8430-42e5-8fbf-f5316dec97df?height=300px&timepicker=true" title="Provola" scrolling="no" width="300" height="300"></iframe></td>
<td><iframe name="2.2" src="https://chart-embed.service.eu.newrelic.com/herald/372d4abb-7707-4301-8140-5c33a756e152?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
<td><iframe name="2.3" src="https://chart-embed.service.eu.newrelic.com/herald/71054053-fcfd-4951-be94-dffdef9c924c?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
<td><iframe name="2.4" src="https://chart-embed.service.eu.newrelic.com/herald/5e1e032f-17f8-4d69-b98e-fcb48f8a7961?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
<td><iframe name="2.5" src="https://chart-embed.service.eu.newrelic.com/herald/e8f210f0-86fc-4355-85d8-d7e34816a594?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
</tr>
<tr>
<td><iframe name="3.1" src="https://chart-embed.service.eu.newrelic.com/herald/713b5875-43f7-4427-9f66-8bd04231c280?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
<td><iframe name="3.2" src="https://chart-embed.service.eu.newrelic.com/herald/5bd96edc-186e-4ac2-a620-1f77d38140c3?height=300px&timepicker=true" title="Provola"  scrolling="no" width="300" height="300"></iframe></td>
</tr>
</table>	  
	  
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);