import { ISPListProps } from './ISPListProps';
import * as React from "react";
import { Label, DetailsList, DefaultButton, IColumn } from 'office-ui-fabric-react/lib';
import { SPService } from '../../modules/SPService';
import { ISPList } from '../../modules/ISPList';

let _columns: IColumn[] = [
    {
      key: 'Id',
      name: 'Id',
      fieldName: 'Id',
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
      ariaLabel: 'Operations for name'
    },
    {
      key: 'Title',
      name: 'Title',
      fieldName: 'Title',
      minWidth: 50,
      maxWidth: 100,
      isResizable: true,
      ariaLabel: 'Operations for value'
    },
    {
        key: 'Hidden',
        name: 'Hidden',
        fieldName: 'Hidden',
        minWidth: 50,
        maxWidth: 50,
        isResizable: true,
        ariaLabel: 'Operations for value'
    },
    {
        key: 'ItemCount',
        name: 'ItemCount',
        fieldName: 'ItemCount',
        minWidth: 50,
        maxWidth: 50,
        isResizable: true,
        ariaLabel: 'Operations for value'
      }
  ];
  let _items:ISPList[] = [];

export class SPList extends React.Component<ISPListProps, any>{

    private _spService:SPService = new SPService();    
    constructor(props:ISPListProps){
        super(props);
        this.state = {
            Lists: _items    
        };
    }

    componentWillMount(){
        console.log("Inside componentWillMount");
        try {

            this._spService.GetWebList().then(listResponse=>{
                console.log("ListResponse:"+JSON.stringify(listResponse));
                this.setState({ Lists: listResponse});
            });
            
        } catch (error) {
            console.log("Error while getting list:"+JSON.stringify(error));
        }
        
    }

    render(){
        return(
            <div>
                <h1>React, TypeScript and PnP JS Sample</h1>
                <DetailsList 
                    items= {this.state.Lists}
                    columns={ _columns }
                    setKey='set'
                    />
                <DefaultButton id="btnDemo" text="Demo"></DefaultButton>
            </div>
        );
    }
}
