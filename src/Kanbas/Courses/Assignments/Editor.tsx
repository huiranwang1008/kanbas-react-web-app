export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        {/* Assignment Name */}
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
  
    
      {/* Assignment Description */}
      <label htmlFor="wd-description">Description</label>
      <textarea id="wd-description" rows={10} cols={60}>
        The assignment is available online. Submit a link to the landing page of
        your web application running on Netlify. The landing page should include
        the following: Your full name and section. Links to each of the lab
        assignments. Link to the Kanbas application. Links to all relevant source
        code repositories. The Kanbas application should include a link to navigate
        back to the landing page.
      </textarea>
      <br /><br />

  
        <table>
          {/* Points */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
  
          {/* Assignment Group */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">Assignments</option>
                <option value="quizzes">Quizzes</option>
              </select>
            </td>
          </tr>
  
          {/* Display Grade As */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
              </select>
            </td>
          </tr>
  
          {/* Submission Type */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="paper">On Paper</option>
              </select>
            </td>
          </tr>
  
          {/* Online Entry Options */}
          <tr>
            <td align="right" valign="top">Online Entry Options</td>
            <td>
              <input type="checkbox" id="wd-text-entry" /> <label htmlFor="wd-text-entry">Text Entry</label><br />
              <input type="checkbox" id="wd-website-url" /> <label htmlFor="wd-website-url">Website URL</label><br />
              <input type="checkbox" id="wd-media-recordings" /> <label htmlFor="wd-media-recordings">Media Recordings</label><br />
              <input type="checkbox" id="wd-file-upload" /> <label htmlFor="wd-file-upload">File Upload</label><br />
            </td>
          </tr>
  
          {/* Assign To */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <select id="wd-assign-to">
                <option value="everyone">Everyone</option>
                <option value="group1">Group 1</option>
              </select>
            </td>
          </tr>
  
          {/* Due Date */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </td>
          </tr>
  
          {/* Available From */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" value="2024-05-06" />
            </td>
          </tr>
  
          {/* Available Until */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" value="2024-05-20" />
            </td>
          </tr>
        </table>
  
        <br />
        {/* Save and Cancel buttons */}
        <button id="wd-save">Save</button>
        <button id="wd-cancel">Cancel</button>
      </div>
    );
  }