import React from 'react'
import {
  Menu,
  DataList,
  DataListItem,
  Status,
  Loading,
  Footer,
  DataTable,
  Title,
  ContextButton,
  FloatingButton,
  LogTable,
  Actions,
  ActionsSet,
  CardSkeleton
} from 'components'

import {
  Dashboard,
  Person,
  Public,
  Receipt,
  Settings,
  Tune,
  Refresh
} from '@mui/icons-material'
import { TextField, Tabs, Tab, Box, Paper } from '@mui/material'

const traces = [
  {
    _id: '621eee80-a280-11eb-ac42-59226d583fc9',
    operation: 'events',
    ip: '127.0.0.1',
    user: 'jibadano@gmail.com',
    module: 'core',
    date: '2021-04-21T09:03:05.064Z',
    environment: 'development',
    logs: [
      {
        _id: '607fea4913416337b4446a01',
        message: 'Request',
        timestamp: '2021-04-21T09:03:05.065Z',
        data:
          'query events($offset: Int, $size: Int, $name: String, $sort: String, $bookmakerId: String) {\n  events(offset: $offset, size: $size, name: $name, sort: $sort, bookmakerId: $bookmakerId) {\n    _id\n    date\n    sport\n    framework\n    bookmakerId\n    name\n    odds {\n      type\n      bookmakerId\n      name\n      data\n      value\n      __typename\n    }\n    __typename\n  }\n}\n',
        type: 'info',
        __typename: 'Log'
      },
      {
        _id: '607fea4913416337b4446a02',
        message: 'Response',
        timestamp: '2021-04-21T09:03:05.157Z',
        data:
          '{"events":[{"_id":"607357cda5ebc1ccc8c4856c","date":"1618169400548","sport":"football","framework":"Argentina. Copa Diego Armando Maradona","bookmakerId":"melbet","name":"Union de Santa Fe  vs Boca Juniors ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":3.92,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":3.54,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":1.88,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.88,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.31,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.26,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Union de Santa Fe "},"value":1.29,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Boca Juniors "},"value":3.68,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":2.1,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.81,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48582","date":"1618178400548","sport":"football","framework":"Mexico. Primera Division","bookmakerId":"melbet","name":"Queretaro  vs Santos Laguna ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":2.605,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":3.4,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":2.696,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.464,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.315,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.496,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Queretaro "},"value":5.35,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Santos Laguna "},"value":1.14,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":2.04,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.795,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48577","date":"1618178400548","sport":"football","framework":"Argentina. Copa Diego Armando Maradona","bookmakerId":"melbet","name":"River Plate Buenos Aires  vs Club Atletico Colon ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.368,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":4.64,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":8.2,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.076,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.2,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":2.99,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"River Plate Buenos Aires "},"value":2.21,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Club Atletico Colon "},"value":1.68,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":1.95,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.94,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c4858d","date":"1618185960548","sport":"football","framework":"Mexico. Primera Division","bookmakerId":"melbet","name":"Tijuana  vs Mazatlan ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.872,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":3.7,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":3.96,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.248,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.275,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.904,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Tijuana "},"value":3.32,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Mazatlan "},"value":1.31,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":1.862,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.96,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48598","date":"1618187400548","sport":"football","framework":"Belarus. Regional League A","bookmakerId":"melbet","name":"Borisov  vs Mogilev ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":2.3,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.85,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":2.04,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.69,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":null,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.55,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"","team":"Borisov "},"value":null,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"","team":"Mogilev "},"value":null,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"8.5"},"value":1.69,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"8.5"},"value":1.99,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c485a3","date":"1618192800548","sport":"football","framework":"Belarus. Regional League B","bookmakerId":"melbet","name":"Vahtery  vs LiftMash ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.57,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.5,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":3.64,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.2,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":null,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":2.3,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Vahtery "},"value":2.05,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"LiftMash "},"value":1.65,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"6.5"},"value":1.78,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"6.5"},"value":1.88,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c485ae","date":"1618203600548","sport":"football","framework":"Belarus. Regional League A","bookmakerId":"melbet","name":"Brest  vs Grodno ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":2.69,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.45,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":1.85,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.87,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":null,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.36,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Brest "},"value":1.44,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Grodno "},"value":2.51,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"7.5"},"value":1.79,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"7.5"},"value":1.87,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c486ed","date":"1618210800549","sport":"football","framework":"Belarus. Regional League B","bookmakerId":"melbet","name":"Litviny  vs Ptich ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.76,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.5,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":2.92,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.31,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":null,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.98,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Litviny "},"value":2.35,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Ptich "},"value":1.5,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"7.5"},"value":1.9,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"7.5"},"value":1.77,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48632","date":"1618225200549","sport":"football","framework":"Turkey. SuperLiga","bookmakerId":"melbet","name":"Kasimpasa  vs Yeni Malatyaspor ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":2.17,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":3.48,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":3.6,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.328,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.344,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.75,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Kasimpasa "},"value":3.88,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Yeni Malatyaspor "},"value":1.24,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":1.99,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.91,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48653","date":"1618225200549","sport":"football","framework":"Turkey. SuperLiga","bookmakerId":"melbet","name":"Home (Goals)  vs Away (Goals) ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.27,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.7,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":6.5,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.09,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.09,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":3.6,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"2.5","team":"Home (Goals) "},"value":1.77,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"2.5","team":"Away (Goals) "},"value":1.98,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"8.5"},"value":1.87,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"8.5"},"value":1.87,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48561","date":"1618236000548","sport":"football","framework":"Russia. Premier League","bookmakerId":"melbet","name":"CSKA Moscow  vs Rotor Volgograd ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.296,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.05,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":12.5,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.056,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.16,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":3.92,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"CSKA Moscow "},"value":1.88,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Rotor Volgograd "},"value":2.07,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":1.736,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":2.272,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c4867f","date":"1618236000549","sport":"football","framework":"Poland. Ekstraklasa","bookmakerId":"melbet","name":"Piast Gliwice  vs Gornik Zabrze ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":2.07,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":3.34,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":3.78,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.28,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.34,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.79,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Piast Gliwice "},"value":3.88,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Gornik Zabrze "},"value":1.24,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":2.29,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.69,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48648","date":"1618236000549","sport":"football","framework":"Turkey. SuperLiga","bookmakerId":"melbet","name":"Fenerbahce  vs Gazisehir Gaziantep ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.515,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":4.5,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":6.95,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.128,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.235,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":2.696,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Fenerbahce "},"value":2.315,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Gazisehir Gaziantep "},"value":1.684,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":1.685,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":2.315,"__typename":"Odd"}],"__typename":"Event"}]}',
        type: 'info',
        __typename: 'Log'
      }
    ],
    __typename: 'Trace'
  },
  {
    _id: '621e5240-a280-11eb-ac42-59226d583fc9',
    operation: null,
    ip: '127.0.0.1',
    user: null,
    module: 'core',
    date: '2021-04-21T09:03:05.060Z',
    environment: 'development',
    logs: [
      {
        _id: '607fea4913416337b4446a00',
        message: 'Request',
        timestamp: '2021-04-21T09:03:05.061Z',
        data: null,
        type: 'info',
        __typename: 'Log'
      }
    ],
    __typename: 'Trace'
  },
  {
    _id: '17bfa000-a280-11eb-ac42-59226d583fc9',
    operation: 'events',
    ip: '127.0.0.1',
    user: 'jibadano@gmail.com',
    module: 'core',
    date: '2021-04-21T09:01:00.288Z',
    environment: 'development',
    logs: [
      {
        _id: '607fe9cc13416337b44469fe',
        message: 'Request',
        timestamp: '2021-04-21T09:01:00.289Z',
        data:
          'query events($offset: Int, $size: Int, $name: String, $sort: String, $bookmakerId: String) {\n  events(offset: $offset, size: $size, name: $name, sort: $sort, bookmakerId: $bookmakerId) {\n    _id\n    date\n    sport\n    framework\n    bookmakerId\n    name\n    odds {\n      type\n      bookmakerId\n      name\n      data\n      value\n      __typename\n    }\n    __typename\n  }\n}\n',
        type: 'info',
        __typename: 'Log'
      },
      {
        _id: '607fe9cc13416337b44469ff',
        message: 'Response',
        timestamp: '2021-04-21T09:01:00.504Z',
        data:
          '{"events":[{"_id":"607357cda5ebc1ccc8c4856c","date":"1618169400548","sport":"football","framework":"Argentina. Copa Diego Armando Maradona","bookmakerId":"melbet","name":"Union de Santa Fe  vs Boca Juniors ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":3.92,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":3.54,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":1.88,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.88,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.31,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.26,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Union de Santa Fe "},"value":1.29,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Boca Juniors "},"value":3.68,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":2.1,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.81,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48582","date":"1618178400548","sport":"football","framework":"Mexico. Primera Division","bookmakerId":"melbet","name":"Queretaro  vs Santos Laguna ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":2.605,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":3.4,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":2.696,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.464,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.315,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.496,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Queretaro "},"value":5.35,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Santos Laguna "},"value":1.14,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":2.04,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.795,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48577","date":"1618178400548","sport":"football","framework":"Argentina. Copa Diego Armando Maradona","bookmakerId":"melbet","name":"River Plate Buenos Aires  vs Club Atletico Colon ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.368,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":4.64,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":8.2,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.076,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.2,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":2.99,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"River Plate Buenos Aires "},"value":2.21,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Club Atletico Colon "},"value":1.68,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":1.95,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.94,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c4858d","date":"1618185960548","sport":"football","framework":"Mexico. Primera Division","bookmakerId":"melbet","name":"Tijuana  vs Mazatlan ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.872,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":3.7,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":3.96,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.248,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.275,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.904,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Tijuana "},"value":3.32,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Mazatlan "},"value":1.31,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":1.862,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.96,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48598","date":"1618187400548","sport":"football","framework":"Belarus. Regional League A","bookmakerId":"melbet","name":"Borisov  vs Mogilev ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":2.3,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.85,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":2.04,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.69,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":null,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.55,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"","team":"Borisov "},"value":null,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"","team":"Mogilev "},"value":null,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"8.5"},"value":1.69,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"8.5"},"value":1.99,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c485a3","date":"1618192800548","sport":"football","framework":"Belarus. Regional League B","bookmakerId":"melbet","name":"Vahtery  vs LiftMash ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.57,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.5,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":3.64,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.2,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":null,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":2.3,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Vahtery "},"value":2.05,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"LiftMash "},"value":1.65,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"6.5"},"value":1.78,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"6.5"},"value":1.88,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c485ae","date":"1618203600548","sport":"football","framework":"Belarus. Regional League A","bookmakerId":"melbet","name":"Brest  vs Grodno ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":2.69,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.45,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":1.85,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.87,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":null,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.36,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Brest "},"value":1.44,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Grodno "},"value":2.51,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"7.5"},"value":1.79,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"7.5"},"value":1.87,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c486ed","date":"1618210800549","sport":"football","framework":"Belarus. Regional League B","bookmakerId":"melbet","name":"Litviny  vs Ptich ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.76,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.5,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":2.92,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.31,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":null,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.98,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Litviny "},"value":2.35,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Ptich "},"value":1.5,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"7.5"},"value":1.9,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"7.5"},"value":1.77,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48632","date":"1618225200549","sport":"football","framework":"Turkey. SuperLiga","bookmakerId":"melbet","name":"Kasimpasa  vs Yeni Malatyaspor ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":2.17,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":3.48,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":3.6,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.328,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.344,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.75,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Kasimpasa "},"value":3.88,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Yeni Malatyaspor "},"value":1.24,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":1.99,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.91,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48653","date":"1618225200549","sport":"football","framework":"Turkey. SuperLiga","bookmakerId":"melbet","name":"Home (Goals)  vs Away (Goals) ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.27,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.7,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":6.5,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.09,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.09,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":3.6,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"2.5","team":"Home (Goals) "},"value":1.77,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"2.5","team":"Away (Goals) "},"value":1.98,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"8.5"},"value":1.87,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"8.5"},"value":1.87,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48561","date":"1618236000548","sport":"football","framework":"Russia. Premier League","bookmakerId":"melbet","name":"CSKA Moscow  vs Rotor Volgograd ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.296,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":6.05,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":12.5,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.056,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.16,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":3.92,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"CSKA Moscow "},"value":1.88,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Rotor Volgograd "},"value":2.07,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":1.736,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":2.272,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c4867f","date":"1618236000549","sport":"football","framework":"Poland. Ekstraklasa","bookmakerId":"melbet","name":"Piast Gliwice  vs Gornik Zabrze ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":2.07,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":3.34,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":3.78,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.28,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.34,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":1.79,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Piast Gliwice "},"value":3.88,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Gornik Zabrze "},"value":1.24,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":2.29,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":1.69,"__typename":"Odd"}],"__typename":"Event"},{"_id":"607357cda5ebc1ccc8c48648","date":"1618236000549","sport":"football","framework":"Turkey. SuperLiga","bookmakerId":"melbet","name":"Fenerbahce  vs Gazisehir Gaziantep ","odds":[{"type":"1X2","bookmakerId":null,"name":"1","data":null,"value":1.515,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"X","data":null,"value":4.5,"__typename":"Odd"},{"type":"1X2","bookmakerId":null,"name":"2","data":null,"value":6.95,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"1X","data":null,"value":1.128,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"12","data":null,"value":1.235,"__typename":"Odd"},{"type":"double_chance","bookmakerId":null,"name":"X2","data":null,"value":2.696,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"-","data":{"goals":"1.5","team":"Fenerbahce "},"value":2.315,"__typename":"Odd"},{"type":"handicap","bookmakerId":null,"name":"+","data":{"goals":"1.5","team":"Gazisehir Gaziantep "},"value":1.684,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"over","data":{"goals":"2.5"},"value":1.685,"__typename":"Odd"},{"type":"total","bookmakerId":null,"name":"under","data":{"goals":"2.5"},"value":2.315,"__typename":"Odd"}],"__typename":"Event"}]}',
        type: 'info',
        __typename: 'Log'
      }
    ],
    __typename: 'Trace'
  },
  {
    _id: '17b084d0-a280-11eb-ac42-59226d583fc9',
    operation: null,
    ip: '127.0.0.1',
    user: null,
    module: 'core',
    date: '2021-04-21T09:01:00.189Z',
    environment: 'development',
    logs: [
      {
        _id: '607fe9cc13416337b44469fd',
        message: 'Request',
        timestamp: '2021-04-21T09:01:00.204Z',
        data: null,
        type: 'info',
        __typename: 'Log'
      }
    ],
    __typename: 'Trace'
  },
  {
    _id: '94c0c2f0-a27b-11eb-ac42-59226d583fc9',
    operation: 'Start up',
    ip: null,
    user: null,
    module: 'core',
    date: '2021-04-21T08:28:42.527Z',
    environment: 'development',
    logs: [
      {
        _id: '607fe23a13416337b44469fc',
        message: 'Server ready',
        timestamp: '2021-04-21T08:28:42.532Z',
        data: { name: 'Timba (dev)', date: '4/21/2021' },
        type: 'info',
        __typename: 'Log'
      }
    ],
    __typename: 'Trace'
  }
]

export const OperationStory = () => {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading()
    }, 3000)
  })
  return <LogTable loading={loading} traces={traces} />
}

export const FloatingButtonStory = () => {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading()
    }, 3000)
  })
  return (
    <FloatingButton loading={loading}>
      <Refresh />
    </FloatingButton>
  )
}

export const ContextButtonStory = () => {
  const [label, setLabel] = React.useState()
  React.useEffect(() => {
    setTimeout(() => {
      setLabel('Account')
    }, 3000)
  })
  return <ContextButton label={label}>Good Morning, Jane</ContextButton>
}

export const TitleStory = () => (
  <Title
    overtitle="Overview"
    subtitle="Here's what's happening with your projects today"
  >
    Good Morning, Jane
  </Title>
)

export const DataTableStory = () => {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading()
    }, 3000)
  })
  return (
    <DataTable
      head={
        <>
          <Tabs value={1}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          <Box p={2}>
            <TextField variant="outlined" />
          </Box>
        </>
      }
      loading={loading}
      onPageChange={console.log}
      onSortChange={console.log}
      hasMore
      config={[
        {
          title: 'Id'
        },
        { title: 'Date', _id: 'date', sortable: true },
        { title: 'Event', _id: 'name', sortable: true },
        {
          title: 'Framework',
          _id: 'event.framework',
          sortable: true
        }
      ]}
      rows={[
        {
          values: [
            1,
            new Date().toLocaleDateString(),
            'PSG vs Juventus',
            'Champions league'
          ],
          _id: 1
        },
        {
          values: [
            2,
            new Date().toLocaleDateString(),
            'Barcelona vs Real Madrid',
            'Champions league'
          ],
          _id: 2
        },
        {
          values: [
            3,
            new Date().toLocaleDateString(),
            'Manchester City vs Tottenham',
            'Premier league'
          ],
          _id: 3
        },
        {
          values: [
            4,
            new Date().toLocaleDateString(),
            'Bayern Munchen vs Borussia Dormunt',
            'Bundesliga'
          ],
          _id: 4
        }
      ]}
    />
  )
}

export const FooterStory = () => <Footer name={'Components'} />

export const LoadingStory = () => <Loading />

export const StatusStory = () => (
  <>
    <Status severity="ok">Done</Status>
    <Status severity="info" inprogress>
      Info
    </Status>
    <Status severity="error">Error</Status>
    <Status severity="warning">Warning</Status>
  </>
)

export const DataListStory = () => (
  <DataList
    images={[
      'https://res.cloudinary.com/dfeyswrng/image/upload/v1599574150/xqlyvueiluej6scouiqi.jpg'
    ]}
    title="Data list title"
  >
    <DataListItem label="label1" primary="value1" />
    <DataListItem label="label2" primary="value2" />
    <DataListItem label="label3" primary="value3" />
    <DataListItem label="label4" primary="value4" />
    <DataListItem label="label5" primary="value5" />
  </DataList>
)

export const MenuStory = () => {
  const user = {
    image:
      'https://res.cloudinary.com/dfeyswrng/image/upload/v1599574150/xqlyvueiluej6scouiqi.jpg',
    role: 'CEO',
    name: 'María Laura'
  }

  const items = [
    {
      href: '/',
      icon: Dashboard,
      title: 'Dashboard'
    },
    {
      href: '/bookmaker',
      icon: Public,
      title: 'Bookmakers'
    },
    {
      href: '/user',
      icon: Person,
      title: 'Users'
    },
    {
      href: '/transaction',
      icon: Receipt,
      title: 'Transactions'
    },

    {
      href: '/Settings',
      icon: Settings,
      title: 'Settings'
    },
    {
      href: '/logs',
      icon: Tune,
      title: 'Logs'
    }
  ]

  return (
    <Menu
      logo={
        <img
          alt="asd"
          width="100px"
          src="https://res.cloudinary.com/dfeyswrng/image/upload/v1596820660/e03vgo5zsczktscel3x4.png"
        />
      }
      onChange={console.log}
      items={items}
      user={user}
    />
  )
}

export const BottomActionsStory = () => (
  <Paper style={{ padding: 24, width: '100%' }}>
    <Actions
      fullWidth
      optional={[
        {
          children: 'Options',
          variant: 'contained',
          elevation: 0,
          onClick: () => {}
        }
      ]}
      left={[
        {
          children: 'Back',
          variant: 'link',
          onClick: () => {}
        }
      ]}
      right={[
        {
          children: 'Remove',
          variant: 'outlined',
          color: 'secondary',

          onClick: () => {}
        },
        {
          children: 'Edit',
          variant: 'contained',
          color: 'primary',
          onClick: () => {}
        }
      ]}
    />
  </Paper>
)

export const BottomActionsSetStory = () => (
  <Paper style={{ padding: 24, width: '100%' }}>
    <ActionsSet
      set={[
        {
          children: 'Remove',
          variant: 'outlined',
          color: 'secondary',

          onClick: () => {}
        },
        {
          children: 'Edit',
          variant: 'contained',
          color: 'primary',
          onClick: () => {}
        }
      ]}
    />
  </Paper>
)

export const CardSkeletonStory = () => <CardSkeleton height={600} />
