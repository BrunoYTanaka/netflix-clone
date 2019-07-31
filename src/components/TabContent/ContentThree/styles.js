import styled from 'styled-components'

export const Container = styled.div`

  background:var(--main-deep-dark);

//   Tab Top Content
  .tab-content-top{
      display:grid;
      grid-template-columns: repeat(12,1fr);
      padding: 3rem 0 0;
      justify-content: center;
      align-items: center;

  }

  .tab-content{
      margin: 0 15%;
      padding-bottom:1%;
  }

  span{
      grid-column: 3/9;
  }
  .btn{
      margin-left: 3rem;
      margin-right: 5.1rem;
      grid-column: 9/12;
  }

//   Tab Bottom Content

  .tab-bottom-content{
      margin:2rem auto;
  }

//   Table
  table{
      width: 100%;
      margin-top: 2rem;
      border-collpse: collapse.
  }

  table thead th{
      text-transform: uppercase;
      padding: 0.8rem;

  }

  table tbody{
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
  }

  table tbody tr td {
      color: #999;
      padding: 0.8rem 1.2rem;
      text-align: center;
  }

  table tbody tr td:first-child{
    text-align: left;
  }
  table tbody tr:nth-child(even){
      background: #222;
  }

`