import React from 'react';

function Model({ btnname, title, content, className, id, style }) {
  return (
    <div>
      {/* Button trigger modal */}
      <button 
        type="button" 
        className={`${className} px-4 py-2 font-semibold rounded-lg shadow-lg`} 
        data-bs-toggle="modal" 
        data-bs-target={`#modal-${id}`} 
        style={{ backgroundColor: '#1a1a2e', ...style }}
      >
        {btnname}
      </button>

      {/* Modal */}
      <div className="modal fade" id={`modal-${id}`} tabIndex={-1} aria-labelledby={`modal-label-${id}`}>
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: '#16213e', color: '#ffffff', borderRadius: '10px', border: '1px solid #e94560' }}>
            <div className="modal-header" style={{ borderBottom: '1px solid #e94560' }}>
              <h5 className="modal-title" id={`modal-label-${id}`} style={{ color: '#e94560' }}>{title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ filter: 'invert(1)' }}></button>
            </div>
            <div className="modal-body" style={{ fontSize: '1.1rem' }}>{content}</div>
            <div className="modal-footer" style={{ borderTop: '1px solid #e94560' }}>
              <button type="button" className="btn" data-bs-dismiss="modal" style={{ backgroundColor: '#e94560', color: '#fff', borderRadius: '5px' }}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;