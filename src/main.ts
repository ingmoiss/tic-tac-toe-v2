import './style.css'
import { Table } from './components/index.ts';

const tableHtml = `
<div class="game-container">
  <div class="label">
    Current Player: 
    <span class="player-label"></span>
  </div>
  <div class="table-container">
    <div class="top-row">
      <div class="spot-1"></div>
      <div class="spot-2"></div>
      <div class="spot-3"></div>
    </div>
    <div class="center-row">
      <div class="spot-4"></div>
      <div class="spot-5"></div>
      <div class="spot-6"></div>
    </div>
    <div class="bottom-row">
      <div class="spot-7"></div>
      <div class="spot-8"></div>
      <div class="spot-9"></div>
    </div>
  </div>  

  <div class="reset-button button">Reset</div>
</div>
`;

Table.create(tableHtml);
